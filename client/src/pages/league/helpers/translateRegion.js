"use strict";
exports.__esModule = true;
var translateRegion = function (region) {
    switch (region) {
        case 'na1':
        case 'br1':
        case 'la1':
        case 'la2':
            return 'americas';
        case 'kr':
        case 'jp1':
            return 'asia';
        case 'eun1':
        case 'euw1':
        case 'tr1':
        case 'ru':
            return 'europe';
        case 'ph2':
        case 'oc1':
        case 'sg2':
        case 'th2':
        case 'tw2':
        case 'vn2':
            return 'sea';
    }
};
exports["default"] = translateRegion;
