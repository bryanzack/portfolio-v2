"use strict";
exports.__esModule = true;
var React = require('react');
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var Deck = function (props) {
    var numCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.numCards; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("h1", null,
                "numCards: ",
                numCards),
            React.createElement("div", { className: "deckButtons" },
                React.createElement("button", { onClick: function () { return dispatch((0, deckSlice_1.addCard)()); } }, "increment"),
                React.createElement("button", { onClick: function () { return dispatch((0, deckSlice_1.removeCard)()); } }, "decrement")))));
};
exports["default"] = Deck;
