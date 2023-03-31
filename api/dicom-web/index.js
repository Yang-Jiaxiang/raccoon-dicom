const express = require("express");
const Joi = require("joi");
const { validateParams, intArrayJoi } = require("../validator");
const router = express();

//#region QIDO-RS

/**
 *  @openapi
 *  /dicom-web/studies:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query for studies
 *      parameters:
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 */
router.get("/studies", require("./controller/QIDO-RS/queryAllStudies"));

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query for series from specific study's UID
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *        - $ref: "#/components/parameters/Modality"
 *        - $ref: "#/components/parameters/SeriesNumber"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/SeriesRequiredMatchingAttributes"
 */
router.get(
    "/studies/:studyUID/series",
    require("./controller/QIDO-RS/queryStudies-Series")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/instances:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query for studies
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *        - $ref: "#/components/parameters/Modality"
 *        - $ref: "#/components/parameters/SeriesNumber"
 *        - $ref: "#/components/parameters/SOPClassUID"
 *        - $ref: "#/components/parameters/InstanceNumber"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/SeriesRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/InstanceRequiredMatchingAttributes"
 */
router.get(
    "/studies/:studyUID/instances",
    require("./controller/QIDO-RS/queryStudies-Instances")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series/{seriesUID}/instances:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query for studies
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/seriesUID"
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *        - $ref: "#/components/parameters/Modality"
 *        - $ref: "#/components/parameters/SeriesNumber"
 *        - $ref: "#/components/parameters/SOPClassUID"
 *        - $ref: "#/components/parameters/InstanceNumber"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/SeriesRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/InstanceRequiredMatchingAttributes"
 */
router.get(
    "/studies/:studyUID/series/:seriesUID/instances",
    require("./controller/QIDO-RS/queryStudies-Series-Instance")
);

/**
 *  @openapi
 *  /dicom-web/series:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query all series in server
 *      parameters:
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *        - $ref: "#/components/parameters/Modality"
 *        - $ref: "#/components/parameters/SeriesNumber"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/SeriesRequiredMatchingAttributes"
 * 
 */
router.get(
    "/series",
    require("./controller/QIDO-RS/queryAllSeries")
);

/**
 *  @openapi
 *  /dicom-web/instances:
 *    get:
 *      tags:
 *        - QIDO-RS
 *      description: Query all instances in server
 *      parameters:
 *        - $ref: "#/components/parameters/StudyDate"
 *        - $ref: "#/components/parameters/StudyTime"
 *        - $ref: "#/components/parameters/AccessionNumber"
 *        - $ref: "#/components/parameters/ModalitiesInStudy"
 *        - $ref: "#/components/parameters/ReferringPhysicianName"
 *        - $ref: "#/components/parameters/PatientName"
 *        - $ref: "#/components/parameters/PatientID"
 *        - $ref: "#/components/parameters/StudyID"
 *        - $ref: "#/components/parameters/Modality"
 *        - $ref: "#/components/parameters/SeriesNumber"
 *        - $ref: "#/components/parameters/SOPClassUID"
 *        - $ref: "#/components/parameters/InstanceNumber"
 *      responses:
 *        200:
 *          description: Query successfully
 *          content:
 *            "application/dicom+json":
 *              schema:
 *                type: array
 *                items:
 *                  allOf:
 *                  - $ref: "#/components/schemas/StudyRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/SeriesRequiredMatchingAttributes"
 *                  - $ref: "#/components/schemas/InstanceRequiredMatchingAttributes"
 */
router.get(
    "/instances",
    require("./controller/QIDO-RS/queryAllInstances")
);

//#endregion

//#region STOW-RS

/**
 *  @openapi
 *  /dicom-web/studies:
 *    post:
 *      tags:
 *        - STOW-RS
 *      description: store DICOM instance
 *      requestBody:
 *        content:
 *          multipart/related:
 *            schema:
 *              type: object
 *              properties:
 *                file:
 *                  type: string
 *                  format: binary
 *            encoding:
 *              file:
 *                contentType: application/dicom;
 *      responses:
 *        "200":
 *          description: The DICOM instance store successfully
 */
router.post("/studies", require("./controller/STOW-RS/storeInstance"));

//#endregion

//#region WADO-RS Retrieve Transaction Instance Resources

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve Study's instances
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/MultipartRelatedDICOM"
 *          
 */
router.get(
    "/studies/:studyUID",
    require("./controller/WADO-RS/retrieveStudyInstances")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series/{seriesUID}:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve Study's series' instances
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/seriesUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/MultipartRelatedDICOM"
 *          
 */
router.get(
    "/studies/:studyUID/series/:seriesUID",
    require("./controller/WADO-RS/retrieveStudy-Series-Instances")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series/{seriesUID}/instances/{instanceUID}:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve Study's instances
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/seriesUID"
 *        - $ref: "#/components/parameters/instanceUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/MultipartRelatedDICOM"
 *          
 */
router.get(
    "/studies/:studyUID/series/:seriesUID/instances/:instanceUID",
    require("./controller/WADO-RS/retrieveInstance")
);

//#endregion

//#region WADO-RS Retrieve Transaction Metadata Resources

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/metadata:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve Study's instances' metadata
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/DicomMetadata"
 *          
 */
router.get(
    "/studies/:studyUID/metadata",
    require("./controller/WADO-RS/retrieveStudyMetadata")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series/{seriesUID}/metadata:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve Study's series' instances' metadata
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/seriesUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/DicomMetadata"
 *          
 */
router.get(
    "/studies/:studyUID/series/:seriesUID/metadata",
    require("./controller/WADO-RS/retrieveSeriesMetadata")
);

/**
 *  @openapi
 *  /dicom-web/studies/{studyUID}/series/{seriesUID}/instances/{instanceUID}/metadata:
 *    get:
 *      tags:
 *        - WADO-RS
 *      description: Retrieve instance's metadata
 *      parameters:
 *        - $ref: "#/components/parameters/studyUID"
 *        - $ref: "#/components/parameters/seriesUID"
 *        - $ref: "#/components/parameters/instanceUID"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/DicomMetadata"
 *          
 */
router.get(
    "/studies/:studyUID/series/:seriesUID/instances/:instanceUID/metadata",
    require("./controller/WADO-RS/retrieveInstanceMetadata")
);

//#endregion

//#region WADO-RS Retrieve Transaction Rendered Resources

const renderedQueryValidation = {
    quality: Joi.number().integer().min(1).max(100),
    iccprofile: Joi.string().default("no").valid("no", "yes", "srgb", "adobergb", "rommrgb"),
    viewport: Joi.string().custom((v, helper) => {
        let valueSplit = v.split(",");
        if (valueSplit.length == 2) {
            let [vw, vh] = valueSplit;
            if (!Joi.number().min(0).validate(vw).error &&
                !Joi.number().min(0).validate(vh).error) {
                return v;
            }
            return helper.message(`invalid viewport parameter, viewport=vw,vh. The vw and vh must be number`);
        } else if (valueSplit.length == 6) {
            let [vw, vh, sx, sy, sw, sh] = valueSplit;
            if (Joi.number().empty("").validate(sx).error) {
                return helper.message("invalid viewport parameter, sx must be number");
            } else if (Joi.number().empty("").validate(sy).error) {
                return helper.message("invalid viewport parameter, sy must be number");
            }
            [vw, vh, sx, sy, sw, sh] = valueSplit.map(v=> Number(v));
            if (!Joi.number().min(0).validate(vw).error &&
                !Joi.number().min(0).validate(vh).error &&
                !Joi.number().min(0).validate(sx).error &&
                !Joi.number().min(0).validate(sy).error &&
                !Joi.number().validate(sw).error &&
                !Joi.number().validate(sh).error
            ) {
                return v;
            }
        } 
        return helper.message("invalid viewport parameter, viewport=vw,vh or viewport=vw,vh,sx,sy,sw,sh");
    })
};

router.get(
    "/studies/:studyUID/rendered",
    validateParams(renderedQueryValidation, "query", { allowUnknown: false }),
    require("./controller/WADO-RS/rendered/study")
);

router.get(
    "/studies/:studyUID/series/:seriesUID/rendered",
    validateParams(renderedQueryValidation, "query", { allowUnknown: false }),
    require("./controller/WADO-RS/rendered/series")
);

router.get(
    "/studies/:studyUID/series/:seriesUID/instances/:instanceUID/rendered",
    validateParams(renderedQueryValidation, "query", { allowUnknown: false }),
    require("./controller/WADO-RS/rendered/instances")
);

router.get(
    "/studies/:studyUID/series/:seriesUID/instances/:instanceUID/frames/:frameNumber/rendered",
    validateParams({
        frameNumber : intArrayJoi.intArray().items(Joi.number().integer().min(1)).single()
    } , "params" , {allowUnknown : true}), 
    validateParams(renderedQueryValidation, "query", { allowUnknown: false }),
    require("./controller/WADO-RS/rendered/instanceFrames")
);

//#endregion

module.exports = router;
