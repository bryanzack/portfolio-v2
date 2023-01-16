"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSubmitted = exports.leagueSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    has_submitted: false,
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState,
    reducers: {
        setSubmitted: (state, action) => {
            state.has_submitted = action.payload;
        },
    },
});
exports.setSubmitted = exports.leagueSlice.actions.setSubmitted;
exports.default = exports.leagueSlice.reducer;
