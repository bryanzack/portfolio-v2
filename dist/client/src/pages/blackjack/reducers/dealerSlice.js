"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bustDealer = exports.removeFromDealer = exports.addToDealer = exports.dealerSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const cards_1 = __importDefault(require("../helpers/cards"));
const initialState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false,
};
exports.dealerSlice = (0, toolkit_1.createSlice)({
    name: 'dealer',
    initialState,
    reducers: {
        addToDealer: (state, action) => {
            state.cards.push(action.payload);
            state.score += cards_1.default[action.payload].val;
        },
        removeFromDealer: (state, action) => {
            if (state.cards.length !== 0) {
                state.score -= cards_1.default[action.payload].val;
                state.cards.pop();
            }
        },
        bustDealer: (state) => {
            state.isBust = !state.isBust;
        },
    },
});
_a = exports.dealerSlice.actions, exports.addToDealer = _a.addToDealer, exports.removeFromDealer = _a.removeFromDealer, exports.bustDealer = _a.bustDealer;
exports.default = exports.dealerSlice.reducer;
