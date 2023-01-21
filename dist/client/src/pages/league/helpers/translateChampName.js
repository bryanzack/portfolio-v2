"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateChampName = void 0;
// this is necessary due to inconsistencies in the official Riot API
const translateChampName = (name) => ((name === 'FiddleSticks') ? 'Fiddlesticks' : name);
exports.translateChampName = translateChampName;
