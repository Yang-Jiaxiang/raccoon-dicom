module.exports.tagsOfRequiredMatching = {
    Patient: {
        "00100010": 1,
        "00100020": 1,
        "00100021": 1,
        "00100030": 1,
        "00100032": 1,
        "00100040": 1,
        "00101001": 1,
        "00101002": 1,
        "00102160": 1,
        "00104000": 1,
        "00880130": 1,
        "00880140": 1
    },
    Study: {
        "00080005": 1,
        "00080020": 1,
        "00080030": 1,
        "00080050": 1,
        "00080056": 1,
        "00080061": 1,
        "00080090": 1,
        "00080201": 1,
        "00100010": 1,
        "00100020": 1,
        "00100030": 1,
        "00100040": 1,
        "0020000D": 1,
        "00200010": 1,
        "00201206": 1,
        "00201208": 1
    },
    Series: {
        "00080021": 1,
        "00080060": 1,
        "0008103E": 1,
        "0008103F": 1,
        "00081050": 1,
        "00081052": 1,
        "00081070": 1,
        "00081072": 1,
        "00081250": 1,
        "0020000E": 1,
        "00200011": 1,
        "00400244": 1,
        "00400245": 1,
        "00400275": 1
    },
    Instance: {
        "00080016": 1,
        "00080018": 1,
        "00080070": 1,
        "00083002": 1,
        "00200013": 1,
        "00280008": 1,
        "00280010": 1,
        "00280011": 1,
        "00280100": 1
    }
};

module.exports.tagsNeedStore = {
    Patient: {
        "00100010": {
            vr: "PN"
        },
        "00100020": {
            vr: "LO"
        },
        "00100021": {
            vr: "LO"
        },
        "00100030": {
            vr: "DA"
        },
        "00100032": {
            vr: "TM"
        },
        "00100040": {
            vr: "CS"
        },
        "00101001": {
            vr: "PN"
        },
        "00101002": {
            vr: "SQ"
        },
        "00102160": {
            vr: "SH"
        },
        "00104000": {
            vr: "LT"
        },
        "00880130": {
            "vr": "SH"
        },
        "00880140": {
            "vr": "UI"
        }
    },
    /**
     * 
     * @description 
     * tag from: {@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.2.html|Common Study IE Modules}
     * ,{@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.2.2.html|Patient Study Module}
     * and {@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.2.3.html|Clinical Trial Study Module}
     * 
     */
    Study: {
        "00080005": {
            vr: "CS"
        },
        "00080020": {
            vr: "DA"
        },
        "00080030": {
            vr: "TM"
        },
        "00080050": {
            vr: "SH"
        },
        "00080051": {
            vr: "SQ"
        },
        "00080056": {
            vr: "CS"
        },
        "00080061": {
            vr: "CS"
        },
        "00080062": {
            vr: "UI"
        },
        "00080090": {
            vr: "PN"
        },
        "00080096": {
            vr: "SQ"
        },
        "0008009C": {
            vr: "PN"
        },
        "0008009D": {
            vr: "SQ"
        },
        "00080201": {
            vr: "SH"
        },
        "00081030": {
            vr: "LO"
        },
        "00081032": {
            vr: "SQ"
        },
        "00081048": {
            vr: "PN"
        },
        "00081049": {
            vr: "SQ"
        },
        "00081060": {
            vr: "PN"
        },
        "00081062": {
            vr: "SQ"
        },
        "00081110": {
            vr: "SQ"
        },
        "00100010": {
            vr: "PN"
        },
        "00100020": {
            vr: "LO"
        },
        "00100030": {
            vr: "DA"
        },
        "00100040": {
            vr: "CS"
        },
        "0020000D": {
            vr: "UI"
        },
        "00200010": {
            vr: "SH"
        },
        "00201206": {
            vr: "IS"
        },
        "00201208": {
            vr: "IS"
        },
        "00321033": {
            vr: "LO"
        },
        "00321034": {
            vr: "SQ"
        },
        "00401012": {
            vr: "SQ"
        },
        "00081080": {
            vr: "LO"
        },
        "00081084": {
            vr: "SQ"
        },
        "00101010": {
            vr: "AS"
        },
        "00101020": {
            vr: "DS"
        },
        "00101021": {
            vr: "SQ"
        },
        "00101022": {
            vr: "DS"
        },
        "00101023": {
            vr: "DS"
        },
        "00101024": {
            vr: "DS"
        },
        "00101030": {
            vr: "DS"
        },
        "00102000": {
            vr: "LO"
        },
        "00102110": {
            vr: "LO"
        },
        "001021C0": {
            vr: "US"
        },
        "001021D0": {
            vr: "DA"
        },
        "00380500": {
            vr: "LO"
        },
        "00102180": {
            vr: "SH"
        },
        "001021B0": {
            vr: "LT"
        },
        "00380010": {
            vr: "LO"
        },
        "00380014": {
            vr: "SQ"
        },
        "00321066": {
            vr: "UT"
        },
        "00321067": {
            vr: "SQ"
        },
        "00380060": {
            vr: "LO"
        },
        "00380064": {
            vr: "SQ"
        },
        "00380062": {
            vr: "LO"
        },
        "00102203": {
            vr: "CS"
        },
        "00120050": {
            vr: "LO"
        },
        "00120051": {
            vr: "ST"
        },
        "00120054": {
            "vr": "SQ"
        },
        "00120052": {
            "vr": "FD"
        },
        "00120053": {
            "vr": "CS"
        },
        "00120083": {
            "vr": "SQ"
        }
    },
    /**
     * @description
     * tag from: {@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html|Common Series IE Modules}
     * ,{@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.2.html|Clinical Trial Series Module}
     * and {@link https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.3.html|Enhanced Series Module}
     */
    Series: {
        "00080021": {
            vr: "DA"
        },
        "00080060": {
            vr: "CS"
        },
        "0008103E": {
            vr: "LO"
        },
        "0008103F": {
            vr: "SQ"
        },
        "00081050": {
            vr: "PN"
        },
        "00081052": {
            vr: "SQ"
        },
        "00081070": {
            vr: "PN"
        },
        "00081072": {
            vr: "SQ"
        },
        "00081250": {
            vr: "SQ"
        },
        "0020000E": {
            vr: "UI"
        },
        "00200011": {
            vr: "IS"
        },
        "00400244": {
            vr: "DA"
        },
        "00400245": {
            vr: "TM"
        },
        "00400275": {
            vr: "SQ"
        },
        "00200060": {
            "vr": "CS"
        },
        "00080031": {
            "vr": "TM"
        },
        "00181030": {
            "vr": "LO"
        },
        "00081111": {
            "vr": "SQ"
        },
        "00180015": {
            "vr": "CS"
        },
        "00185100": {
            "vr": "CS"
        },
        "00280108": {
            "vr": "SS"
        },
        "00280109": {
            "vr": "SS"
        },
        "00102210": {
            "vr": "CS"
        },
        "300A0700": {
            "vr": "UI"
        },
        "00120060": {
            "vr": "LO"
        },
        "00120071": {
            "vr": "LO"
        },
        "00120072": {
            "vr": "LO"
        }
    },
    /**
     * @description
     * tag from dcm4che: {@link https://github.com/dcm4che/dcm4chee-arc-light/blob/master/dcm4chee-arc-conf-test/src/test/java/org/dcm4chee/arc/conf/ArchiveDeviceFactory.java | ArchiveDeviceFactory}
     * ,{@link https://dicom.nema.org/medical/Dicom/2016e/output/chtml/part03/sect_C.30.2.html | Unified Procedure Step Scheduled Procedure Information Module Attributes}
     */
    UPS: {
        "00080005": {
            "vr": "CS"
        },
        "00080016": {
            "vr": "UI"
        },
        "00080018": {
            "vr": "UI"
        },
        "00080080": {
            "vr": "LO"
        },
        "00080081": {
            "vr": "ST"
        },
        "00080082": {
            "vr": "SQ"
        },
        "00080090": {
            "vr": "PN"
        },
        "00080092": {
            "vr": "ST"
        },
        "00080094": {
            "vr": "SH"
        },
        "00080096": {
            "vr": "SQ"
        },
        "0008009C": {
            "vr": "PN"
        },
        "0008009D": {
            "vr": "SQ"
        },
        "00081040": {
            "vr": "LO"
        },
        "00081041": {
            "vr": "SQ"
        },
        "00081080": {
            "vr": "LO"
        },
        "00081084": {
            "vr": "SQ"
        },
        "00081195": {
            "vr": "UI"
        },
        "00101010": {
            "vr": "AS"
        },
        "00101020": {
            "vr": "DS"
        },
        "00101021": {
            "vr": "SQ"
        },
        "00101023": {
            "vr": "DS"
        },
        "00101024": {
            "vr": "DS"
        },
        "00101030": {
            "vr": "DS"
        },
        "00102180": {
            "vr": "SH"
        },
        "001021B0": {
            "vr": "LT"
        },
        "00102203": {
            "vr": "CS"
        },
        "00102000": {
            "vr": "LO"
        },
        "00102110": {
            "vr": "LO"
        },
        "001021A0": {
            "vr": "CS"
        },
        "001021C0": {
            "vr": "US"
        },
        "001021D0": {
            "vr": "DA"
        },
        "0020000D": {
            "vr": "UI"
        },
        "00321066": {
            "vr": "UT"
        },
        "00321067": {
            "vr": "SQ"
        },
        "00380010": {
            "vr": "LO"
        },
        "00380014": {
            "vr": "SQ"
        },
        "00380050": {
            "vr": "LO"
        },
        "00380100": {
            "vr": "SQ"
        },
        "00380101": {
            "vr": "SQ"
        },
        "00380500": {
            "vr": "LO"
        },
        "00380502": {
            "vr": "SQ"
        },
        "00380008": {
            "vr": "CS"
        },
        "00380016": {
            "vr": "LO"
        },
        "00380020": {
            "vr": "DA"
        },
        "00380021": {
            "vr": "TM"
        },
        "00380060": {
            "vr": "LO"
        },
        "00380062": {
            "vr": "LO"
        },
        "00380064": {
            "vr": "SQ"
        },
        "00380300": {
            "vr": "LO"
        },
        "00380400": {
            "vr": "LO"
        },
        "00384000": {
            "vr": "LT"
        },
        "00404005": {
            "vr": "DT"
        },
        "00404008": {
            "vr": "DT"
        },
        "00404011": {
            "vr": "DT"
        },
        "00404018": {
            "vr": "SQ"
        },
        "00404021": {
            "vr": "SQ"
        },
        "00404025": {
            "vr": "SQ"
        },
        "00404026": {
            "vr": "SQ"
        },
        "00404027": {
            "vr": "SQ"
        },
        "00404034": {
            "vr": "SQ"
        },
        "00404041": {
            "vr": "CS"
        },
        "00404070": {
            "vr": "SQ"
        },
        "0040E020": {
            "vr": "CS"
        },
        "0040E021": {
            "vr": "SQ"
        },
        "0040E022": {
            "vr": "SQ"
        },
        "0040E023": {
            "vr": "SQ"
        },
        "0040E024": {
            "vr": "SQ"
        },
        "0040E025": {
            "vr": "SQ"
        },
        "0040A370": {
            "vr": "SQ"
        },
        "00741000": {
            "vr": "CS"
        },
        "00741002": {
            "vr": "SQ"
        },
        "00741200": {
            "vr": "CS"
        },
        "00741202": {
            "vr": "LO"
        },
        "00741204": {
            "vr": "LO"
        },
        "00741210": {
            "vr": "SQ"
        },
        "00741216": {
            "vr": "SQ"
        },
        "00741224": {
            "vr": "SQ"
        }
    }
};
