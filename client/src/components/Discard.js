"use strict";
exports.__esModule = true;
var React = require('react');
require("./Discard.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var Discard = function (props) {
    var isDiscardFull = (0, react_redux_1.useSelector)(function (state) { return state.discard.isFull; });
    var isDiscardEmpty = (0, react_redux_1.useSelector)(function (state) { return state.discard.isEmpty; });
    var numDiscardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.numCards; });
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var topOfDiscard = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards[state.discard.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        console.log("discard: " + discardCards);
    }, [discardCards]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "discard" },
            React.createElement("h1", null,
                "numCards: ",
                numDiscardCards),
            React.createElement("div", { className: "discardButtons" },
                React.createElement("button", { onClick: function () { return dispatch((0, deckSlice_1.addToDeck)(topOfDiscard)) && dispatch((0, discardSlice_1.removeFromDiscard)(topOfDiscard)); } }, "Reclaim top of discard"),
                React.createElement("span", null, isDiscardFull ? "full" : ""),
                React.createElement("span", null, isDiscardEmpty ? "empty" : "")))));
};
exports["default"] = Discard;
