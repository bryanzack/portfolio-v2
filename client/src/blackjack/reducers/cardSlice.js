"use strict";
exports.__esModule = true;
exports.changeTheme = exports.cardSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    theme: "blue"
};
exports.cardSlice = (0, toolkit_1.createSlice)({
    name: 'card',
    initialState: initialState,
    reducers: {
        changeTheme: function (state, action) {
            state.theme = action.payload;
        }
    }
});
exports.changeTheme = exports.cardSlice.actions.changeTheme;
exports["default"] = exports.cardSlice.reducer;
