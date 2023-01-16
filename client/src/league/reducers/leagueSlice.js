"use strict";
exports.__esModule = true;
exports.setSubmitted = exports.leagueSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    has_submitted: false
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState: initialState,
    reducers: {
        setSubmitted: function (state, action) {
            state.has_submitted = action.payload;
        }
    }
});
exports.setSubmitted = exports.leagueSlice.actions.setSubmitted;
exports["default"] = exports.leagueSlice.reducer;
