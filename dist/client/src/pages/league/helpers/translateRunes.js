"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translatePrimary = exports.translateSecondary = void 0;
const runesReforged = __importStar(require("../static/runesReforged.json"));
const perks = __importStar(require("../static/perks.json"));
const rune_base = 'https://ddragon.leagueoflegends.com/cdn/img/';
const translateSecondary = (id) => {
    let rune_path = "";
    Object.keys(runesReforged).map((rune, index) => {
        if (runesReforged[index].id === id)
            rune_path = runesReforged[index].icon;
    });
    return `${rune_base}${rune_path}`;
};
exports.translateSecondary = translateSecondary;
const translatePrimary = (id) => {
    let rune_path = "";
    for (let toplevel in perks) {
        if (perks[toplevel].id === id) {
            rune_path = perks[toplevel].iconPath.replace('/lol-game-data/assets/v1/', '');
        }
    }
    return `${rune_base}${rune_path}`;
};
exports.translatePrimary = translatePrimary;
