"use strict";
var _a;
exports.__esModule = true;
exports.removeFromPlayer = exports.addToPlayer = exports.playerSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
    score: 0
};
exports.playerSlice = (0, toolkit_1.createSlice)({
    name: 'player',
    initialState: initialState,
    reducers: {
        addToPlayer: function (state, action) {
            if (state.numCards === 0) {
                state.cards.push(action.payload);
                state.numCards++;
                state.isEmpty = false;
            }
            else if (state.numCards === 1) {
                state.cards.push(action.payload);
                state.numCards++;
                state.isFull = true;
            }
            else if (state.numCards === 2) {
            }
        },
        removeFromPlayer: function (state, action) {
            if (state.numCards === 0) {
            }
            else if (state.numCards === 1) {
                state.cards.pop();
                state.numCards--;
                state.isEmpty = true;
            }
            else if (state.numCards === 2) {
                state.cards.pop();
                state.numCards--;
                state.isFull = false;
            }
        }
    }
});
exports.addToPlayer = (_a = exports.playerSlice.actions, _a.addToPlayer), exports.removeFromPlayer = _a.removeFromPlayer;
exports["default"] = exports.playerSlice.reducer;
