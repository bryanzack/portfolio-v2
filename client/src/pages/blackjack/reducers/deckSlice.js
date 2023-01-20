"use strict";
var _a;
exports.__esModule = true;
exports.selectCards = exports.removeFromDeck = exports.addToDeck = exports.shuffle = exports.deckSlice = exports.testThunk = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var discardSlice_1 = require("./discardSlice");
var cards_1 = require("../helpers/cards");
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
    topCard: 1
};
var testThunk = function (discardCards) {
    return function (dispatch, getState) {
        discardCards.forEach(function (card) {
            dispatch((0, discardSlice_1.removeFromDiscard)(card));
            dispatch((0, exports.addToDeck)(card));
        });
        /*
        const currVal = selectCards(getState());
        console.log(currVal);
        dispatch(removeFromDeck(currVal.length-1));
        const newVal = selectCards(getState());
        console.log(newVal);
         */
    };
};
exports.testThunk = testThunk;
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
                console.log("failed to add to deck: " + cards_1["default"][action.payload].name + " of " + cards_1["default"][action.payload].suite + " (" + action.payload + ")");
            }
        },
        removeFromDeck: function (state, action) {
            if (state.numCards > 1 && state.numCards) {
                state.isFull = false;
            }
            else if (state.numCards === 1) {
                state.isEmpty = true;
            }
            else if (state.numCards === 51) {
                state.isFull = false;
            }
            state.numCards--;
            state.cards.pop();
        }
    }
});
exports.shuffle = (_a = exports.deckSlice.actions, _a.shuffle), exports.addToDeck = _a.addToDeck, exports.removeFromDeck = _a.removeFromDeck;
var selectCards = function (state) { return state.deck.cards; };
exports.selectCards = selectCards;
exports["default"] = exports.deckSlice.reducer;
