"use strict";
var _a;
exports.__esModule = true;
exports.setSearchParams = exports.setShowHistory = exports.leagueSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    search_params: {
        selected_region: "",
        user_input: ""
    },
    show_history: false
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState: initialState,
    reducers: {
        setSearchParams: function (state, action) {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
        },
        setShowHistory: function (state, action) {
            state.show_history = action.payload;
        }
    }
});
exports.setShowHistory = (_a = exports.leagueSlice.actions, _a.setShowHistory), exports.setSearchParams = _a.setSearchParams;
exports["default"] = exports.leagueSlice.reducer;
