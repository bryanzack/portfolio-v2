"use strict";
var _a;
exports.__esModule = true;
exports.removeFromDiscard = exports.addToDiscard = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: []
};
var discardSlice = (0, toolkit_1.createSlice)({
    name: 'discard',
    initialState: initialState,
    reducers: {
        addToDiscard: function (state, action) {
            if (state.numCards < 51) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
            }
            else if (state.numCards === 51) {
                state.isFull = true;
                state.numCards++;
                state.cards.push(action.payload);
            }
            else if (state.numCards === 0) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
            }
        },
        removeFromDiscard: function (state, action) {
            if (state.numCards > 1) {
                state.isFull = false;
                state.numCards--;
                state.cards.pop();
            }
            else if (state.numCards === 1) {
                state.isEmpty = true;
                state.numCards--;
                state.cards.pop();
            }
            else if (state.numCards === 51) {
                state.isFull = false;
            }
        }
    }
});
exports.addToDiscard = (_a = discardSlice.actions, _a.addToDiscard), exports.removeFromDiscard = _a.removeFromDiscard;
exports["default"] = discardSlice.reducer;
