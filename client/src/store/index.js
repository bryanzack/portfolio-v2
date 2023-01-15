"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var deckSlice_1 = require("../blackjack/reducers/deckSlice");
var cardSlice_1 = require("../blackjack/reducers/cardSlice");
var discardSlice_1 = require("../blackjack/reducers/discardSlice");
var playerSlice_1 = require("../blackjack/reducers/playerSlice");
var dealerSlice_1 = require("../blackjack/reducers/dealerSlice");
var gameSlice_1 = require("../blackjack/reducers/gameSlice");
var navSlice_1 = require("../landing/reducers/navSlice");
var searchBarSlice_1 = require("../league/reducers/searchBarSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        deck: deckSlice_1["default"],
        card: cardSlice_1["default"],
        discard: discardSlice_1["default"],
        player: playerSlice_1["default"],
        dealer: dealerSlice_1["default"],
        game: gameSlice_1["default"],
        nav: navSlice_1["default"],
        searchbar: searchBarSlice_1["default"]
    }
});
