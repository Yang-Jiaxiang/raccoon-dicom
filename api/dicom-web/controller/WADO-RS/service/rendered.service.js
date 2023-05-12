const path = require("path");
const mongoose = require("mongoose");
const fs = require("fs");
const sharp = require("sharp");
const { Dcm2JpgExecutor } = require("../../../../../models/DICOM/dcm4che/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor");
const { Dcm2JpgExecutor$Dcm2JpgOptions } = require("../../../../../models/DICOM/dcm4che/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor$Dcm2JpgOptions");
const notImageSOPClass = require("../../../../../models/DICOM/dicomWEB/notImageSOPClass");
const Magick = require("../../../../../models/magick");
const _ = require("lodash");

const { raccoonConfig } = require("../../../../../config-class");

/**
 * 
 * @param {*} param The req.query
 * @param {Magick} magick
 */
 function handleImageQuality(param, magick) {
    if (param.quality) {
        magick.quality(param.quality);
    }
}

/**
 *
 * @param {*} param The req.query
 * @param {Magick} magick
 * @param {string} instanceID
 */
 async function handleImageICCProfile(param, magick, instanceID) {
    let iccProfileAction = {
        "no" : async ()=> {},
        "yes": async ()=> {
            let iccProfileBinaryFile = await mongoose.model("dicomBulkData").findOne({
                $and: [
                    {
                        binaryValuePath: "00480105.Value.0.00282000.InlineBinary"
                    },
                    {
                        instanceUID: instanceID
                    }
                ]
            });
            if(!iccProfileBinaryFile) throw new Error("The Image dose not have icc profile tag");
            let iccProfileSrc = path.join(raccoonConfig.dicomWebConfig.storeRootPath, iccProfileBinaryFile.filename);
            let dest = path.join(raccoonConfig.dicomWebConfig.storeRootPath, iccProfileBinaryFile.filename + `.icc`);
            if (!fs.existsSync(dest)) fs.copyFileSync(iccProfileSrc, dest);
            magick.iccProfile(dest);
        },
        "srgb": async ()=> {
            magick.iccProfile(path.join(process.cwd(), "models/DICOM/dicomWEB/iccprofiles/sRGB.icc"));
        },
        "adobergb": async () => {
            magick.iccProfile(path.join(process.cwd(), "models/DICOM/dicomWEB/iccprofiles/adobeRGB.icc"));
        },
        "rommrgb": async ()=> {
            magick.iccProfile(path.join(process.cwd(), "models/DICOM/dicomWEB/iccprofiles/rommRGB.icc"));
        }
    };
    try {
        if (param.iccprofile) {
            await iccProfileAction[param.iccprofile]();
        }
    } catch(e) {
        console.error("set icc profile error:" , e);
        throw e;
    }
}

/**
 *
 * @param {*} param
 * @param {sharp.Sharp} imageSharp
 * @param {Magick} magick
 */
 async function handleViewport(param, imageSharp, magick) {
    if (param.viewport) {
        let imageMetadata = await imageSharp.metadata();
        let viewportSplit = param.viewport.split(",").map(v => Number(v));
        if (viewportSplit.length == 2) {
            let [vw, vh] = viewportSplit;
            magick.resize(vw, vh);
        } else {
            let [vw, vh, sx, sy, sw, sh] = viewportSplit;
            magick.resize(vw, vh);
            if (sw == 0) sw = imageMetadata.width - sx;
            if (sh == 0) sh = imageMetadata.height - sy;

            if (sw < 0) {
                magick.flip();
                sw = Math.abs(sw);
            }
            if (sh < 0) {
                magick.flop();
                sh = Math.abs(sw);
            }
            magick.crop(sx, sy, sw, sh);
        }
    }
}
/**
 * 
 * @param {Object} iParam 
 * @return { Promise<import("../../../../../utils/typeDef/WADO-RS/WADO-RS.def").InstanceFrameObj> | Promise<undefined> }
 */
async function getInstanceFrameObj(iParam, otherFields={}) {
    let { studyUID, seriesUID, instanceUID } = iParam;
    try {
        /** @type { import("mongoose").FilterQuery<any> } */
        let query = {
            $and: [
                {
                    studyUID: studyUID
                },
                {
                    seriesUID: seriesUID
                },
                {
                    instanceUID: instanceUID
                },
                {
                    "00080016.Value": {
                        $nin: notImageSOPClass
                    }
                }
            ]
        };
        let doc = await mongoose.model("dicom").findOne(query, {
            studyUID: 1,
            seriesUID: 1,
            instanceUID: 1,
            instancePath: 1,
            "00280008": 1, //number of frames
            "00020010": 1, //transfer syntax UID
            ...otherFields
        }).exec();
        if (doc) {
            let docObj = doc.toObject();
            docObj.instancePath = path.join(
                raccoonConfig.dicomWebConfig.storeRootPath,
                docObj.instancePath
            );
            return docObj;
        }
        return undefined;
    } catch (e) {
        throw e;
    }
}

/**
 * 
 * @param {import("http").IncomingMessage} req 
 * @param {import("../../../../../utils/typeDef/WADO-RS/WADO-RS.def").InstanceFrameObj} instanceFramesObj 
 * @returns 
 */
async function postProcessFrameImage(req, frameNumber, instanceFramesObj) {
    try {

        let dicomFilename = instanceFramesObj.instancePath;
        let jpegFile = dicomFilename.replace(/\.dcm\b/gi , `.${frameNumber-1}.jpg`);

        let dcm2jpgOptions = await Dcm2JpgExecutor$Dcm2JpgOptions.newInstanceAsync();
        dcm2jpgOptions.frameNumber = frameNumber;
        let getFrameImageStatus = await Dcm2JpgExecutor.convertDcmToJpgFromFilename(
            dicomFilename,
            jpegFile,
            dcm2jpgOptions
        );

        if (getFrameImageStatus.status) {
            let imageSharp = sharp(jpegFile);
            let magick = new Magick(jpegFile);
            handleImageQuality(
                req.query,
                magick
            );
            await handleImageICCProfile(
                req.query,
                magick,
                instanceFramesObj.instanceUID
            );
            await handleViewport(
                req.query,
                imageSharp,
                magick
            );
            await magick.execCommand();
            return {
                status: true,
                message: "process successful",
                magick: magick
            };
        }
        return {
            status: false,
            message: "get frame image failed",
            magick: undefined
        };
    } catch(e) {
        console.error(e);
        return {
            status: false,
            message: e,
            magick: undefined
        };
    }
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {number} dicomNumberOfFrames 
 * @param {import("../../../../../utils/typeDef/WADO-RS/WADO-RS.def").ImagePathObj} instanceFramesObj 
 * @param {import("../../../../../utils/multipartWriter").MultipartWriter} multipartWriter 
 */
async function writeRenderedImages(req, dicomNumberOfFrames, instanceFramesObj, multipartWriter) {
    try {
        for (let i = 0 ; i < dicomNumberOfFrames; i++) {
            let postProcessResult = await postProcessFrameImage(req, i+1, instanceFramesObj);
            let buffer = postProcessResult.magick.toBuffer();
            multipartWriter.writeBuffer(buffer, {
                "Content-Type": "image/jpeg",
                "Content-Location": `/dicom-web/studies/${instanceFramesObj.studyUID}/series/${instanceFramesObj.seriesUID}/instances/${instanceFramesObj.instanceUID}/frames/${i+1}/rendered`
            });
        }
    } catch(e) {
        console.error(e);
        throw e;
    }
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {number[]} frames
 * @param {import("../../../../../utils/typeDef/WADO-RS/WADO-RS.def").ImagePathObj} instanceFramesObj 
 * @param {import("../../../../../utils/multipartWriter").MultipartWriter} multipartWriter 
 */
async function writeSpecificFramesRenderedImages(req, frames, instanceFramesObj, multipartWriter) {
    try {
        for (let i = 0 ; i < frames.length; i++) {
            let frameNumber = frames[i];
            let postProcessResult = await postProcessFrameImage(req, frameNumber, instanceFramesObj);
            let buffer = postProcessResult.magick.toBuffer();
            multipartWriter.writeBuffer(buffer, {
                "Content-Type": "image/jpeg",
                "Content-Location": `/dicom-web/studies/${instanceFramesObj.studyUID}/series/${instanceFramesObj.seriesUID}/instances/${instanceFramesObj.instanceUID}/frames/${i+1}/rendered`
            });
        }
    } catch(e) {
        console.error(e);
        throw e;
    }
}

module.exports.handleImageQuality = handleImageQuality;
module.exports.handleImageICCProfile = handleImageICCProfile;
module.exports.handleViewport = handleViewport;
module.exports.getInstanceFrameObj = getInstanceFrameObj;
module.exports.postProcessFrameImage = postProcessFrameImage;
module.exports.writeRenderedImages = writeRenderedImages;
module.exports.writeSpecificFramesRenderedImages = writeSpecificFramesRenderedImages;