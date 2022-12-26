"use strict";
var _a;
exports.__esModule = true;
exports.removeFromDeck = exports.addToDeck = exports.deckSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var fullDeck = function () {
    var deck = [];
    for (var i = 1; i <= 52; i++)
        deck.push(i);
    return deck;
};
var initialState = {
    numCards: 52,
    isEmpty: false,
    isFull: true,
    cards: fullDeck()
};
exports.deckSlice = (0, toolkit_1.createSlice)({
    name: 'deck',
    initialState: initialState,
    reducers: {
        addToDeck: function (state, action) {
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
            }
        },
        removeFromDeck: function (state, action) {
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
exports.addToDeck = (_a = exports.deckSlice.actions, _a.addToDeck), exports.removeFromDeck = _a.removeFromDeck;
exports["default"] = exports.deckSlice.reducer;
