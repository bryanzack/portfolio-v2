"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCards = exports.removeFromDeck = exports.addToDeck = exports.shuffle = exports.deckSlice = exports.testThunk = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const discardSlice_1 = require("./discardSlice");
const cards_1 = __importDefault(require("../helpers/cards"));
let fullDeck = () => {
    let deck = [];
    for (let i = 1; i <= 52; i++)
        deck.push(i);
    return deck;
};
const initialState = {
    numCards: 52,
    isEmpty: false,
    isFull: true,
    cards: fullDeck(),
    topCard: 1,
};
const testThunk = (discardCards) => (dispatch, getState) => {
    discardCards.forEach((card) => {
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
exports.testThunk = testThunk;
exports.deckSlice = (0, toolkit_1.createSlice)({
    name: 'deck',
    initialState,
    reducers: {
        shuffle: (state, action) => {
            for (let i = state.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = state.cards[i];
                state.cards[i] = state.cards[j];
                state.cards[j] = tmp;
            }
        },
        addToDeck: (state, action) => {
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
                console.log("failed to add to deck: " + cards_1.default[action.payload].name + " of " + cards_1.default[action.payload].suite + " (" + action.payload + ")");
            }
        },
        removeFromDeck: (state, action) => {
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
        },
    },
});
_a = exports.deckSlice.actions, exports.shuffle = _a.shuffle, exports.addToDeck = _a.addToDeck, exports.removeFromDeck = _a.removeFromDeck;
const selectCards = (state) => state.deck.cards;
exports.selectCards = selectCards;
exports.default = exports.deckSlice.reducer;
