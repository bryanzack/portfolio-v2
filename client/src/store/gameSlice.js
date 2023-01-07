"use strict";
var _a;
exports.__esModule = true;
exports.determineWinner = exports.resetGame = exports.gameSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    didSomeoneWin: false
};
exports.gameSlice = (0, toolkit_1.createSlice)({
    name: 'game',
    initialState: initialState,
    reducers: {
        determineWinner: function (state, action) {
            state.didSomeoneWin = true;
            state.winner = action.payload;
        },
        resetGame: function (state, action) {
            state.didSomeoneWin = false;
            state.winner = undefined;
        }
    }
});
exports.resetGame = (_a = exports.gameSlice.actions, _a.resetGame), exports.determineWinner = _a.determineWinner;
exports["default"] = exports.gameSlice.reducer;
