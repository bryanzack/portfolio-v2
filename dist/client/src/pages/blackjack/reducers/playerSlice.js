"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromPlayer = exports.addToPlayer = exports.playerSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const cards_1 = __importDefault(require("../helpers/cards"));
const initialState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false,
};
exports.playerSlice = (0, toolkit_1.createSlice)({
    name: 'player',
    initialState,
    reducers: {
        addToPlayer: (state, action) => {
            if (!state.cards.includes(action.payload)) {
                if (state.score + cards_1.default[action.payload].val > 21) {
                    state.isBust = true;
                    state.cards.push(action.payload);
                    state.score += cards_1.default[action.payload].val;
                }
                else {
                    state.score += cards_1.default[action.payload].val;
                    state.cards.push(action.payload);
                }
            }
        },
        removeFromPlayer: (state, action) => {
            if (state.score < 22)
                state.isBust = false;
            if (state.cards.length !== 0) {
                state.score -= cards_1.default[action.payload].val;
                state.cards.pop();
            }
        },
    },
});
_a = exports.playerSlice.actions, exports.addToPlayer = _a.addToPlayer, exports.removeFromPlayer = _a.removeFromPlayer;
exports.default = exports.playerSlice.reducer;
