"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleHover = exports.switchToTab = exports.navSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    active_tab: 'about',
    visible_tabs: ['about'],
    tabs: ['tech', 'projects', 'about'],
};
exports.navSlice = (0, toolkit_1.createSlice)({
    name: 'nav',
    initialState,
    reducers: {
        switchToTab: (state, action) => {
            state.active_tab = action.payload;
            state.visible_tabs = [action.payload];
            let tmpArr = [];
            state.tabs.forEach((tab) => {
                if (tab !== state.active_tab)
                    tmpArr.push(tab);
            });
            state.tabs = [...tmpArr, action.payload];
        },
        toggleHover: (state, action) => {
            state.visible_tabs = action.payload;
        },
    },
});
_a = exports.navSlice.actions, exports.switchToTab = _a.switchToTab, exports.toggleHover = _a.toggleHover;
exports.default = exports.navSlice.reducer;
