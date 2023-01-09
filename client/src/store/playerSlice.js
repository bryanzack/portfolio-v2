"use strict";
var _a;
exports.__esModule = true;
exports.removeFromPlayer = exports.addToPlayer = exports.playerSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var cards_1 = require("../components/cards");
var initialState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false
};
exports.playerSlice = (0, toolkit_1.createSlice)({
    name: 'player',
    initialState: initialState,
    reducers: {
        addToPlayer: function (state, action) {
            if (!state.cards.includes(action.payload)) {
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
        removeFromPlayer: function (state, action) {
            if (state.score < 22)
                state.isBust = false;
            if (state.cards.length !== 0) {
                state.score -= cards_1["default"][action.payload].val;
                state.cards.pop();
            }
        }
    }
});
exports.addToPlayer = (_a = exports.playerSlice.actions, _a.addToPlayer), exports.removeFromPlayer = _a.removeFromPlayer;
exports["default"] = exports.playerSlice.reducer;
