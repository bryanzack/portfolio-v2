"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const deckSlice_1 = __importDefault(require("../blackjack/reducers/deckSlice"));
const cardSlice_1 = __importDefault(require("../blackjack/reducers/cardSlice"));
const discardSlice_1 = __importDefault(require("../blackjack/reducers/discardSlice"));
const playerSlice_1 = __importDefault(require("../blackjack/reducers/playerSlice"));
const dealerSlice_1 = __importDefault(require("../blackjack/reducers/dealerSlice"));
const gameSlice_1 = __importDefault(require("../blackjack/reducers/gameSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        deck: deckSlice_1.default,
        card: cardSlice_1.default,
        discard: discardSlice_1.default,
        player: playerSlice_1.default,
        dealer: dealerSlice_1.default,
        game: gameSlice_1.default,
    },
});
