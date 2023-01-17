"use strict";
var _a;
exports.__esModule = true;
exports.updateSelectedRegion = exports.updateUserInput = exports.searchBarSlice = void 0;
/* eslint-disable */
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    regions: ['br1', 'eun1', 'euw1', 'la1',
        'la2', 'na1', 'oc1', 'ru',
        'tr1', 'jp1', 'kr', 'ph2',
        'sg2', 'tw2', 'th2', 'vn2'],
    selected_region: "na1",
    user_input: ""
};
exports.searchBarSlice = (0, toolkit_1.createSlice)({
    name: 'searchbar',
    initialState: initialState,
    reducers: {
        updateUserInput: function (state, action) {
            state.user_input = action.payload;
            //console.log("updated input");
        },
        updateSelectedRegion: function (state, action) {
            if (state.regions.includes(action.payload)) {
                state.selected_region = action.payload.toLowerCase();
                //console.log("updated region");
            }
            else {
                console.log("Error: ".concat(action.payload, " is not a valid region"));
            }
        }
    }
});
exports.updateUserInput = (_a = exports.searchBarSlice.actions, _a.updateUserInput), exports.updateSelectedRegion = _a.updateSelectedRegion;
exports["default"] = exports.searchBarSlice.reducer;
