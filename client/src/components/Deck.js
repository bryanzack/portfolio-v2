"use strict";
exports.__esModule = true;
var React = require('react');
require("./Deck.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var Deck = function (props) {
    var isDeckFull = (0, react_redux_1.useSelector)(function (state) { return state.deck.isFull; });
    var isDeckEmpty = (0, react_redux_1.useSelector)(function (state) { return state.deck.isEmpty; });
    var numDeckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.numCards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards[state.deck.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        console.log("deck: " + deckCards);
    }, [deckCards]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("h1", null,
                "numCards: ",
                numDeckCards),
            React.createElement("div", { className: "deckButtons" },
                React.createElement("button", { onClick: function () { return dispatch((0, discardSlice_1.addToDiscard)(topOfDeck)) && dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck)); } }, "Discard top of deck card")),
            React.createElement("span", null, isDeckFull ? "full" : ""),
            React.createElement("span", null, isDeckEmpty ? "empty" : ""))));
};
exports["default"] = Deck;
