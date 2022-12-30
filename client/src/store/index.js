"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var deckSlice_1 = require("../store/deckSlice");
var cardSlice_1 = require("../store/cardSlice");
var discardSlice_1 = require("../store/discardSlice");
var playerSlice_1 = require("../store/playerSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        deck: deckSlice_1["default"],
        card: cardSlice_1["default"],
        discard: discardSlice_1["default"],
        player: playerSlice_1["default"]
    }
});
