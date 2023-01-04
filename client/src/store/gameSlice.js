"use strict";
exports.__esModule = true;
exports.determineWinner = exports.gameSlice = void 0;
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
        }
    }
});
exports.determineWinner = exports.gameSlice.actions.determineWinner;
exports["default"] = exports.gameSlice.reducer;
