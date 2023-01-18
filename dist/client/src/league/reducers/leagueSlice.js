"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchParams = exports.leagueSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    search_params: {
        selected_region: "",
        user_input: "",
    }
};
exports.leagueSlice = (0, toolkit_1.createSlice)({
    name: 'league',
    initialState,
    reducers: {
        setSearchParams: (state, action) => {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
        }
    },
});
exports.setSearchParams = exports.leagueSlice.actions.setSearchParams;
exports.default = exports.leagueSlice.reducer;
