"use strict";
exports.__esModule = true;
var React = require('react');
require("./Discard.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var cards_js_1 = require("./cards.js");
var Card_js_1 = require("./Card.js");
var Discard = function (props) {
    var isDiscardFull = (0, react_redux_1.useSelector)(function (state) { return state.discard.isFull; });
    var isDiscardEmpty = (0, react_redux_1.useSelector)(function (state) { return state.discard.isEmpty; });
    var numDiscardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.numCards; });
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var topOfDiscard = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards[state.discard.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (numDiscardCards > 0)
            console.log("lastOfDiscardVal: " + cards_js_1["default"][discardCards[discardCards.length - 1]].data);
        else
            console.log("empty deck");
    }, [discardCards]);
    var handleClick = function () {
        dispatch((0, deckSlice_1.addToDeck)(topOfDiscard)) && dispatch((0, discardSlice_1.removeFromDiscard)(topOfDiscard));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "discard" },
            React.createElement("h1", null,
                "numCards: ",
                numDiscardCards),
            React.createElement("div", { className: "discard-buttons" },
                React.createElement("button", { onClick: function () { return handleClick(); } }, "Reclaim top of discard"),
                React.createElement("span", null, isDiscardFull ? "full" : ""),
                React.createElement("span", null, isDiscardEmpty ? "empty" : "")),
            React.createElement("div", { className: "cards" }, discardCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "discard", isTopCard: index === discardCards[discardCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Discard;
