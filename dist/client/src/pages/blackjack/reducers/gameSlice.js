"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineWinner = exports.resetGame = exports.toggleRepopulating = exports.toggleDebug = exports.gameSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    didSomeoneWin: false,
    repopulating: false,
    debug: false,
};
exports.gameSlice = (0, toolkit_1.createSlice)({
    name: 'game',
    initialState,
    reducers: {
        determineWinner: (state, action) => {
            state.didSomeoneWin = true;
            state.winner = action.payload;
        },
        resetGame: (state, action) => {
            state.didSomeoneWin = false;
            state.winner = undefined;
        },
        toggleRepopulating: (state, action) => {
            state.repopulating = action.payload;
        },
        toggleDebug: (state) => {
            state.debug = !state.debug;
        }
    },
});
_a = exports.gameSlice.actions, exports.toggleDebug = _a.toggleDebug, exports.toggleRepopulating = _a.toggleRepopulating, exports.resetGame = _a.resetGame, exports.determineWinner = _a.determineWinner;
exports.default = exports.gameSlice.reducer;
