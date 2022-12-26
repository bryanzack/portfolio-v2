"use strict";
var _a;
exports.__esModule = true;
exports.removeCard = exports.addCard = exports.deckSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    numCards: 51,
    isEmpty: false,
    isFull: true
};
exports.deckSlice = (0, toolkit_1.createSlice)({
    name: 'deck',
    initialState: initialState,
    reducers: {
        addCard: function (state) {
            state.numCards++;
        },
        removeCard: function (state) {
            state.numCards--;
        }
    }
});
exports.addCard = (_a = exports.deckSlice.actions, _a.addCard), exports.removeCard = _a.removeCard;
exports["default"] = exports.deckSlice.reducer;
