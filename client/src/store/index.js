"use strict";
var _a;
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var deckSlice_1 = require("../pages/blackjack/reducers/deckSlice");
var cardSlice_1 = require("../pages/blackjack/reducers/cardSlice");
var discardSlice_1 = require("../pages/blackjack/reducers/discardSlice");
var playerSlice_1 = require("../pages/blackjack/reducers/playerSlice");
var dealerSlice_1 = require("../pages/blackjack/reducers/dealerSlice");
var gameSlice_1 = require("../pages/blackjack/reducers/gameSlice");
var navSlice_1 = require("../pages/landing/reducers/navSlice");
var searchBarSlice_1 = require("../pages/league/reducers/searchBarSlice");
var leagueSlice_1 = require("../pages/league/reducers/leagueSlice");
var api_1 = require("./api");
exports.store = (0, toolkit_1.configureStore)({
    reducer: (_a = {
            deck: deckSlice_1["default"],
            card: cardSlice_1["default"],
            discard: discardSlice_1["default"],
            player: playerSlice_1["default"],
            dealer: dealerSlice_1["default"],
            game: gameSlice_1["default"],
            nav: navSlice_1["default"],
            searchbar: searchBarSlice_1["default"],
            league: leagueSlice_1["default"]
        },
        _a[api_1.api.reducerPath] = api_1.api.reducer,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(api_1.api.middleware);
    }
});
