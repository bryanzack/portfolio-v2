"use strict";
exports.__esModule = true;
exports.flip = exports.cardSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isFaceUp: false
};
exports.cardSlice = (0, toolkit_1.createSlice)({
    name: 'card',
    initialState: initialState,
    reducers: {
        flip: function (state) {
            state.isFaceUp = !state.isFaceUp;
        }
    }
});
exports.flip = exports.cardSlice.actions.flip;
exports["default"] = exports.cardSlice.reducer;
