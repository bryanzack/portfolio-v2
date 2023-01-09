"use strict";
var _a;
exports.__esModule = true;
exports.determineWinner = exports.resetGame = exports.toggleRepopulating = exports.gameSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    didSomeoneWin: false,
    repopulating: false
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
        },
        toggleRepopulating: function (state, action) {
            state.repopulating = action.payload;
        }
    }
});
exports.toggleRepopulating = (_a = exports.gameSlice.actions, _a.toggleRepopulating), exports.resetGame = _a.resetGame, exports.determineWinner = _a.determineWinner;
exports["default"] = exports.gameSlice.reducer;
