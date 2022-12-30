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
    cards: []
};
exports.playerSlice = (0, toolkit_1.createSlice)({
    name: 'player',
    initialState: initialState,
    reducers: {
        addToPlayer: function (state, action) {
            if (state.numCards === 0) {
                state.isEmpty = false;
                state.cards.push(action.payload);
                state.numCards++;
            }
            else if (state.numCards === 1) {
                state.isEmpty = false;
                state.isFull = false;
                state.cards.push(action.payload);
                state.numCards++;
            }
            else if (state.numCards === 2) {
                state.isFull = true;
            }
        },
        removeFromPlayer: function (state, action) {
            if (state.numCards === 0) {
                state.isEmpty = true;
            }
            else if (state.numCards === 1) {
                state.cards.pop();
                state.isEmpty = true;
                state.isFull = false;
            }
            else if (state.numCards === 2) {
                state.cards.pop();
                state.isFull = true;
            }
        }
    }
});
exports.addToPlayer = (_a = exports.playerSlice.actions, _a.addToPlayer), exports.removeFromPlayer = _a.removeFromPlayer;
exports["default"] = exports.playerSlice.reducer;
