"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const deckSlice_1 = __importDefault(require("../pages/blackjack/reducers/deckSlice"));
const cardSlice_1 = __importDefault(require("../pages/blackjack/reducers/cardSlice"));
const discardSlice_1 = __importDefault(require("../pages/blackjack/reducers/discardSlice"));
const playerSlice_1 = __importDefault(require("../pages/blackjack/reducers/playerSlice"));
const dealerSlice_1 = __importDefault(require("../pages/blackjack/reducers/dealerSlice"));
const gameSlice_1 = __importDefault(require("../pages/blackjack/reducers/gameSlice"));
const navSlice_1 = __importDefault(require("../pages/landing/reducers/navSlice"));
const searchBarSlice_1 = __importDefault(require("../pages/league/reducers/searchBarSlice"));
const leagueSlice_1 = __importDefault(require("../pages/league/reducers/leagueSlice"));
const api_1 = require("./api");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        deck: deckSlice_1.default,
        card: cardSlice_1.default,
        discard: discardSlice_1.default,
        player: playerSlice_1.default,
        dealer: dealerSlice_1.default,
        game: gameSlice_1.default,
        nav: navSlice_1.default,
        searchbar: searchBarSlice_1.default,
        league: leagueSlice_1.default,
        [api_1.api.reducerPath]: api_1.api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api_1.api.middleware),
});
