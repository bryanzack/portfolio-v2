"use strict";
var _a;
exports.__esModule = true;
exports.removeFromDeck = exports.addToDeck = exports.shuffle = exports.deckSlice = void 0;
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
    cards: fullDeck(),
    topCard: 52
};
exports.deckSlice = (0, toolkit_1.createSlice)({
    name: 'deck',
    initialState: initialState,
    reducers: {
        shuffle: function (state, action) {
            for (var i = state.cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = state.cards[i];
                state.cards[i] = state.cards[j];
                state.cards[j] = tmp;
            }
        },
        addToDeck: function (state, action) {
            if (state.numCards < 51) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
                state.topCard = action.payload;
            }
            else if (state.numCards === 51) {
                state.isFull = true;
                state.numCards++;
                state.cards.push(action.payload);
                state.topCard = action.payload;
            }
            else if (state.numCards === 0) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
                state.topCard = action.payload;
            }
        },
        removeFromDeck: function (state, action) {
            if (state.numCards > 1 && state.numCards) {
                state.isFull = false;
                state.numCards--;
                state.cards.pop();
                state.topCard = action.payload;
            }
            else if (state.numCards === 1) {
                state.isEmpty = true;
                state.numCards--;
                state.cards.pop();
                state.topCard = action.payload;
            }
            else if (state.numCards === 51) {
                state.isFull = false;
            }
        }
    }
});
exports.shuffle = (_a = exports.deckSlice.actions, _a.shuffle), exports.addToDeck = _a.addToDeck, exports.removeFromDeck = _a.removeFromDeck;
exports["default"] = exports.deckSlice.reducer;
