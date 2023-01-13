"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
exports.__esModule = true;
exports.toggleHover = exports.switchToTab = exports.navSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    active_tab: 'about',
    visible_tabs: ['about'],
    tabs: ['tech', 'projects', 'about']
};
exports.navSlice = (0, toolkit_1.createSlice)({
    name: 'nav',
    initialState: initialState,
    reducers: {
        switchToTab: function (state, action) {
            state.active_tab = action.payload;
            state.visible_tabs = [action.payload];
            var tmpArr = [];
            state.tabs.forEach(function (tab) {
                if (tab !== state.active_tab)
                    tmpArr.push(tab);
            });
            state.tabs = __spreadArray(__spreadArray([], tmpArr, true), [action.payload], false);
        },
        toggleHover: function (state, action) {
            state.visible_tabs = action.payload;
        }
    }
});
exports.switchToTab = (_a = exports.navSlice.actions, _a.switchToTab), exports.toggleHover = _a.toggleHover;
exports["default"] = exports.navSlice.reducer;
