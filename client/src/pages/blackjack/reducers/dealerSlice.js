"use strict";
var _a;
exports.__esModule = true;
exports.bustDealer = exports.removeFromDealer = exports.addToDealer = exports.dealerSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var cards_1 = require("../helpers/cards");
var initialState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false
};
exports.dealerSlice = (0, toolkit_1.createSlice)({
    name: 'dealer',
    initialState: initialState,
    reducers: {
        addToDealer: function (state, action) {
            state.cards.push(action.payload);
            state.score += cards_1["default"][action.payload].val;
        },
        removeFromDealer: function (state, action) {
            if (state.cards.length !== 0) {
                state.score -= cards_1["default"][action.payload].val;
                state.cards.pop();
            }
        },
        bustDealer: function (state) {
            state.isBust = !state.isBust;
        }
    }
});
exports.addToDealer = (_a = exports.dealerSlice.actions, _a.addToDealer), exports.removeFromDealer = _a.removeFromDealer, exports.bustDealer = _a.bustDealer;
exports["default"] = exports.dealerSlice.reducer;
