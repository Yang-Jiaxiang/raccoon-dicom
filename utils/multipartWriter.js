const { logger } = require("../utils/log");
const uuid = require("uuid");
const fs = require("fs");
const _ = require("lodash");
const dicomParser = require("dicom-parser");
const { streamToBuffer } = require("@jorgeferrero/stream-to-buffer");
const { dcm2jpegCustomCmd } = require("../models/DICOM/dcmtk");
const { URL } = require("url");
const path = require("path");
const DICOM_STORE_ROOTPATH = process.env.DICOM_STORE_ROOTPATH;

/**
 * @typedef {Object} ImagePathObj
 * @property {string} studyUID
 * @property {string} seriesUID
 * @property {string} instanceUID
 * @property {string} instancePath
 */

class MultipartWriter {
    /**
     *
     * @param {Array<ImagePathObj>} imagePathObjList The path list of the images
     * @param {import('http').ServerResponse} res The express response
     * @param {import('express').Request} req
     */
    constructor(imagePathObjList, res, req = {}) {
        this.BOUNDARY = `${uuid.v4()}-${uuid.v4()}-raccoon`;
        this.imagePathObjList = imagePathObjList;
        this.res = res;
        this.req = req;
    }

    /**
     * Write the boundary
     * @param {boolean} isFirst Do not write \r\n\r\n when start if true
     */
    async writeBoundary(isFirst = false) {
        if (isFirst) {
            this.res.write(`--${this.BOUNDARY}\r\n`);
        } else {
            this.res.write(`\r\n--${this.BOUNDARY}\r\n`);
        }
    }

    /**
     * Write final boundary
     */
    async writeFinalBoundary() {
        this.res.write(`\r\n--${this.BOUNDARY}--`);
    }
    /**
     * Write the content-type. <br/>
     * If have transferSyntax, write content-type and transfer-syntax.
     * @param {string} type
     * @param {string} transferSyntax
     */
    async writeContentType(type, transferSyntax = "") {
        if (transferSyntax) {
            this.res.write(
                `Content-Type: ${type};transfer-syntax=${transferSyntax}\r\n`
            );
        } else {
            this.res.write(`Content-Type: ${type}\r\n`);
        }
    }

    /**
     * Write the content-length
     * @param {number} length length of content
     */
    async writeContentLength(length) {
        this.res.write("Content-length: " + length + "\r\n");
    }

    async writeContentLocation(subPath = "") {
        let protocol = this.req.secure ? "https" : "http";
        if (subPath) {
            let urlObj = new URL(
                subPath,
                `${protocol}://${this.req.headers.host}`
            );
            this.res.write(`Content-Location: ${urlObj.href}\r\n`);
        } else {
            this.res.write(
                `Content-Location: ${protocol}://${this.req.headers.host}${this.req.originalUrl}\r\n`
            );
        }
    }

    /**
     * Write the buffer in response
     * @param {Buffer} buffer
     */
    async writeBufferData(buffer) {
        this.res.write("\r\n");
        this.res.write(buffer);
    }

    /**
     * Set the content-type to "multipart/related; type=${type}; boundary=${boundary}"
     * @param {string} type the type of the whole content
     */
    async setHeaderMultipartRelatedContentType(type) {
        this.res.setHeader(
            "content-type",
            `multipart/related; type="${type}"; boundary=${this.BOUNDARY}`
        );
    }

    /**
     * Write the files of DICOM in multipart content
     * @param {string} type
     */
    async writeDICOMFiles(type) {
        try {
            if (this.imagePathObjList) {
                this.setHeaderMultipartRelatedContentType(type);
                for (let i = 0; i < this.imagePathObjList.length; i++) {
                    let {studyUID, seriesUID, instanceUID} = this.imagePathObjList[i];
                    let imagePath = this.imagePathObjList[i].instancePath;
                    let fileBuffer = await streamToBuffer(
                        fs.createReadStream(
                            imagePath
                        )
                    );
                    this.writeBoundary(i === 0);
                    this.writeContentType(type);
                    this.writeContentLength(fileBuffer.length);
                    let instanceUrlPath = `/dicom-web/studies/${studyUID}/series/${seriesUID}/instances/${instanceUID}`;
                    this.writeContentLocation(instanceUrlPath);
                    this.writeBufferData(fileBuffer);
                }
                this.writeFinalBoundary();
                return true;
            }
            return false;
        } catch (e) {
            logger.error(e);
            return false;
        }
    }

    /**
     * Write image files of frames in multipart content
     * @param {string} type
     * @param {Array<number>} frameList
     * @returns
     */
    async writeFrames(type, frameList) {
        this.setHeaderMultipartRelatedContentType();
        let dicomFilename = `${this.imagePathObjList[0].instancePath}`;
        let jpegFile = dicomFilename.replace(/\.dcm\b/gi, "");
        let minFrameNumber = _.min(frameList);
        let maxFrameNumber = _.max(frameList);
        let frameNumberCount = maxFrameNumber - minFrameNumber + 1;
        if (minFrameNumber == maxFrameNumber) {
            frameNumberCount = 1;
        }
        let execCmd = "";
        if (process.env.ENV == "windows") {
            execCmd = `models/dcmtk/dcmtk-3.6.5-win64-dynamic/bin/dcmj2pnm.exe --write-jpeg "${dicomFilename}" "${jpegFile}" --frame-range ${minFrameNumber} ${frameNumberCount}`;
        } else if (process.env.ENV == "linux") {
            execCmd = `dcmj2pnm --write-jpeg "${dicomFilename}" "${jpegFile}" --frame-range ${minFrameNumber} ${frameNumberCount}`;
        }
        let dcm2jpegStatus = await dcm2jpegCustomCmd(execCmd);
        if (dcm2jpegStatus) {
            for (let x = 0; x < frameList.length; x++) {
                let frameJpegFile = dicomFilename.replace(
                    /\.dcm\b/gi,
                    `.${frameList[x] - 1}.jpg`
                );
                let fileBuffer = fs.readFileSync(frameJpegFile);
                let dicomFileBuffer = fs.readFileSync(dicomFilename);
                let dicomDataSet = dicomParser.parseDicom(dicomFileBuffer, {
                    untilTag: "x7fe00010"
                });
                let transferSyntax = dicomDataSet.string("x00020010");
                this.writeBoundary(x == 0);
                this.writeContentType(type, transferSyntax);
                this.writeContentLength(fileBuffer.length);
                this.writeContentLocation();
                this.writeBufferData(fileBuffer);
            }
            this.writeFinalBoundary();
            return true;
        }
        return false;
    }

    /**
     * Write multipart/related of multiple bulk data.
     * @param {import('./typeDef/bulkdata.js').BulkData} bulkDataObj
     * @returns
     */
    async writeBulkData(bulkDataObj, isFirst = true) {
        try {
            let filename = path.join(
                DICOM_STORE_ROOTPATH,
                bulkDataObj.filename
            );
            let fileStream = fs.createReadStream(filename);
            let fileBuffer = await streamToBuffer(fileStream);
            this.writeBoundary(isFirst);
            this.writeContentType("application/octet-stream");
            this.writeContentLength(fileBuffer.length);
            let bulkDataUrlPath = `/api/dicom/instance/${bulkDataObj.instanceUID}/bulkdata/${bulkDataObj.binaryValuePath}`;
            this.writeContentLocation(bulkDataUrlPath);
            this.writeBufferData(fileBuffer);
            return true;
        } catch (e) {
            logger.error(e);
            return false;
        }
    }
}

module.exports.MultipartWriter = MultipartWriter;
