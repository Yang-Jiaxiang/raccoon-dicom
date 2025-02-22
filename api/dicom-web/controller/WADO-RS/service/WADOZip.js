const mongoose = require("mongoose");
const archiver = require("archiver");
const wadoService = require("./WADO-RS.service");
const path = require("path");
const dicomModel = require("../../../../../models/mongodb/models/dicom");

class WADOZip {
    constructor(iParam, iRes) {
        this.requestParams = iParam;
        this.studyUID = iParam.studyUID;
        this.seriesUID = iParam.seriesUID;
        this.instanceUID = iParam.instanceUID;
        this.res = iRes;
    }

    setHeaders(uid) {
        this.res.attachment = `${uid}.zip`;
        this.res.setHeader('Content-Type', 'application/zip');
        this.res.setHeader('Content-Disposition', `attachment; filename=${uid}.zip`);
    }

    async getZipOfStudyDICOMFiles() {
        let imagesPathList = await mongoose.model("dicomStudy").getPathGroupOfInstances(this.requestParams);
        if (imagesPathList.length > 0) {
            this.setHeaders(this.studyUID);

            let folders = [];
            for (let i = 0; i < imagesPathList.length; i++) {
                let imagesFolder = path.dirname(imagesPathList[i].instancePath);
                if (!folders.includes(imagesFolder)) {
                    folders.push(imagesFolder);
                }
            }
            return await toZip(this.res, folders);
        }
        return {
            status: false,
            code: 404,
            message: `not found, Study UID: ${this.requestParams.studyUID}`
        };
    }

    async getZipOfSeriesDICOMFiles() {
        let imagesPathList = await mongoose.model("dicomSeries").getPathGroupOfInstances(this.requestParams);
        if (imagesPathList.length > 0) {
            this.setHeaders(this.seriesUID);

            let folders = [];
            let seriesPath = path.dirname(imagesPathList[0].instancePath);
            folders.push(seriesPath);
            return await toZip(this.res, folders);
        }
        return {
            status: false,
            code: 404,
            message: `not found, Series UID: ${this.requestParams.seriesUID}, Study UID: ${this.requestParams.studyUID}`
        };
    }

    async getZipOfInstanceDICOMFile() {
        let imagePath = await dicomModel.getPathOfInstance(this.requestParams);
        if (imagePath) {
            this.setHeaders(this.instanceUID);

            return await toZip(this.res, [], imagePath.instancePath);
        }
        return {
            status: false,
            code: 404,
            message: `not found, Instance UID: ${this.requestParams.instanceUID}, Series UID: ${this.requestParams.seriesUID}, Study UID: ${this.requestParams.studyUID}`
        };
    }
}

function toZip(res, folders = [], filename = "") {
    return new Promise((resolve) => {
        let archive = archiver('zip', {
            gzip: true,
            zlib: { level: 9 } // Sets the compression level.
        });
        archive.on('error', function (err) {
            console.error(err);
            resolve({
                status: false,
                code: 500,
                data: err
            });
        });
        archive.pipe(res);
        if (folders.length > 0) {
            for (let i = 0; i < folders.length; i++) {
                let folderName = path.basename(folders[i]);
                //archive.append(null, {name : folderName});
                archive.glob("*.dcm", { cwd: folders[i] }, { prefix: folderName });
            }
        } else {
            archive.file(filename);
        }
        archive.finalize().then(() => {
            resolve({
                status: true,
                code: 200,
                data: "success"
            });
        });
    });
}

module.exports.WADOZip = WADOZip;
