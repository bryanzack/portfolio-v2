"use strict";
exports.__esModule = true;
var React = require('react');
require("./Discard.css");
var react_redux_1 = require("react-redux");
var Card_js_1 = require("./Card.js");
var Discard = function () {
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var debug_mode = (0, react_redux_1.useSelector)(function (state) { return state.game.debug; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "discard" },
            debug_mode && "".concat(discardCards.length),
            React.createElement("div", { className: "cards" }, discardCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "discard", key: index, id: index })); })))));
};
exports["default"] = Discard;
