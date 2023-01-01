"use strict";
var _a;
exports.__esModule = true;
exports.removeFromDealer = exports.addToDealer = exports.dealerSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var cards_1 = require("../components/cards");
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
            if (!state.isBust) {
                if (state.score + cards_1["default"][action.payload].val > 21) {
                    state.isBust = true;
                    state.cards.push(action.payload);
                    state.score += cards_1["default"][action.payload].val;
                }
                else {
                    state.score += cards_1["default"][action.payload].val;
                    state.cards.push(action.payload);
                }
            }
        },
        removeFromDealer: function (state, action) {
            if (state.score < 22)
                state.isBust = false;
            if (state.cards.length !== 0) {
                state.score -= cards_1["default"][action.payload].val;
                state.cards.pop();
            }
        }
    }
});
exports.addToDealer = (_a = exports.dealerSlice.actions, _a.addToDealer), exports.removeFromDealer = _a.removeFromDealer;
exports["default"] = exports.dealerSlice.reducer;
