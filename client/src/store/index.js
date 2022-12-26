"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var deckSlice_1 = require("../store/deckSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        deck: deckSlice_1["default"]
    }
});
