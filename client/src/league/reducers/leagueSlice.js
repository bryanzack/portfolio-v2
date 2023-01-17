"use strict";
var _a;
exports.__esModule = true;
exports.setSearchParams = exports.setSubmitted = exports.leagueSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    has_submitted: false,
    search_params: {
        selected_region: "",
        user_input: ""
    }
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState: initialState,
    reducers: {
        setSubmitted: function (state, action) {
            state.has_submitted = action.payload;
        },
        setSearchParams: function (state, action) {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
            console.log("from leagueSlice");
            console.log(state.search_params.user_input);
            console.log(state.search_params.selected_region);
        }
    }
});
exports.setSubmitted = (_a = exports.leagueSlice.actions, _a.setSubmitted), exports.setSearchParams = _a.setSearchParams;
exports["default"] = exports.leagueSlice.reducer;
