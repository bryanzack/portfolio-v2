"use strict";
exports.__esModule = true;
exports.translatePrimary = exports.translateSecondary = void 0;
var runesReforged = require("../static/runesReforged.json");
var perks = require("../static/perks.json");
var rune_base = 'https://ddragon.leagueoflegends.com/cdn/img/';
var translateSecondary = function (id) {
    var rune_path = "";
    Object.keys(runesReforged).map(function (rune, index) {
        if (runesReforged[index].id === id)
            rune_path = runesReforged[index].icon;
    });
    return "".concat(rune_base).concat(rune_path);
};
exports.translateSecondary = translateSecondary;
var translatePrimary = function (id) {
    var rune_path = "";
    for (var toplevel in perks) {
        if (perks[toplevel].id === id) {
            rune_path = perks[toplevel].iconPath.replace('/lol-game-data/assets/v1/', '');
        }
    }
    return "".concat(rune_base).concat(rune_path);
};
exports.translatePrimary = translatePrimary;
