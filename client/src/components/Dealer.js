"use strict";
exports.__esModule = true;
var React = require('react');
require("./Dealer.css");
var react_redux_1 = require("react-redux");
var Card_js_1 = require("./Card.js");
var Dealer = function () {
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dealer" },
            React.createElement("div", { className: "cards" }, dealerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "dealer", isTopCard: index === dealerCards[dealerCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Dealer;