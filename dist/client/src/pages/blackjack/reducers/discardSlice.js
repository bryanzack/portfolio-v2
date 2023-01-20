"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromDiscard = exports.addToDiscard = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
};
const discardSlice = (0, toolkit_1.createSlice)({
    name: 'discard',
    initialState,
    reducers: {
        addToDiscard: (state, action) => {
            if (!state.cards.includes(action.payload)) {
                if (state.numCards < 51) {
                    state.isEmpty = false;
                }
                else if (state.numCards === 51) {
                    state.isFull = true;
                }
                else if (state.numCards === 0) {
                    state.isEmpty = false;
                }
                state.numCards++;
                state.cards.push(action.payload);
            }
            else {
                console.log("failed to add to discard: ", action.payload);
            }
        },
        removeFromDiscard: (state, action) => {
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
            else {
                console.log("frog: discard");
            }
        },
    },
});
_a = discardSlice.actions, exports.addToDiscard = _a.addToDiscard, exports.removeFromDiscard = _a.removeFromDiscard;
exports.default = discardSlice.reducer;
