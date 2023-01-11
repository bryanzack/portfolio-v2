"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchToTab = exports.navSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    active_tab: 'about',
};
exports.navSlice = (0, toolkit_1.createSlice)({
    name: 'nav',
    initialState,
    reducers: {
        switchToTab: (state, action) => {
            state.active_tab = action.payload;
        }
    },
});
exports.switchToTab = exports.navSlice.actions.switchToTab;
exports.default = exports.navSlice.reducer;
