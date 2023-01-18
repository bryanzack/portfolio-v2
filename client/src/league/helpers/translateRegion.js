"use strict";
exports.__esModule = true;
var translateRegion = function (region) {
    switch (region) {
        case 'na1':
        case 'br':
        case 'lan':
        case 'las':
            return 'americas';
        case 'kr':
        case 'jp':
            return 'asia';
        case 'eun1':
        case 'euq1':
        case 'tr1':
        case 'ru':
            return 'europe';
        case 'oc1':
        case 'sg2':
        case 'th1':
        case 'tw2':
        case 'vn2':
            return 'sea';
    }
};
exports["default"] = translateRegion;
