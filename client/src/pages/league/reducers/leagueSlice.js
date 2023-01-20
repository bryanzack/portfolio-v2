"use strict";
exports.__esModule = true;
exports.setSearchParams = exports.leagueSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    search_params: {
        selected_region: "",
        user_input: ""
    }
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState: initialState,
    reducers: {
        setSearchParams: function (state, action) {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
        }
    }
});
exports.setSearchParams = exports.leagueSlice.actions.setSearchParams;
exports["default"] = exports.leagueSlice.reducer;
