"use strict";
exports.__esModule = true;
exports.translateChampName = void 0;
// this is necessary due to inconsistencies in the official Riot API
var translateChampName = function (name) { return ((name === 'FiddleSticks') ? 'Fiddlesticks' : name); };
exports.translateChampName = translateChampName;
