"use strict";
exports.__esModule = true;
var React = require('react');
require("./Dealer.css");
var react_redux_1 = require("react-redux");
var Card_js_1 = require("./Card.js");
var Dealer = function () {
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var debug_mode = (0, react_redux_1.useSelector)(function (state) { return state.game.debug; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dealer" },
            debug_mode && "".concat(dealerCards.length, " (").concat(dealerScore, ")"),
            React.createElement("div", { className: "cards" }, dealerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "dealer", key: index, id: index, from: "dealer" })); })))));
};
exports["default"] = Dealer;
