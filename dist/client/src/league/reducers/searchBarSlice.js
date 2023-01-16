"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSelectedRegion = exports.updateUserInput = exports.searchBarSlice = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    regions: ['br1', 'eun1', 'euw1', 'la1',
        'la2', 'na1', 'oc1', 'ru',
        'tr1', 'jp1', 'kr', 'ph2',
        'sg2', 'tw2', 'th2', 'vn2'],
    selected_region: "na1",
    user_input: "",
};
exports.searchBarSlice = (0, toolkit_1.createSlice)({
    name: 'searchbar',
    initialState,
    reducers: {
        updateUserInput: (state, action) => {
            state.user_input = action.payload;
        },
        updateSelectedRegion: (state, action) => {
            if (state.regions.includes(action.payload)) {
                state.selected_region = action.payload.toLowerCase();
            }
            else {
                console.log(`Error: ${action.payload} is not a valid region`);
            }
        },
    },
});
_a = exports.searchBarSlice.actions, exports.updateUserInput = _a.updateUserInput, exports.updateSelectedRegion = _a.updateSelectedRegion;
exports.default = exports.searchBarSlice.reducer;
