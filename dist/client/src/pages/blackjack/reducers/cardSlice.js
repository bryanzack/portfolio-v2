"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTheme = exports.cardSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    theme: "blue",
};
exports.cardSlice = (0, toolkit_1.createSlice)({
    name: 'card',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
});
exports.changeTheme = exports.cardSlice.actions.changeTheme;
exports.default = exports.cardSlice.reducer;
