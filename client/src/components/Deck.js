"use strict";
exports.__esModule = true;
var React = require('react');
require("./Deck.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var cards_js_1 = require("./cards.js");
var Card_js_1 = require("./Card.js");
var Deck = function (props) {
    var isDeckFull = (0, react_redux_1.useSelector)(function (state) { return state.deck.isFull; });
    var isDeckEmpty = (0, react_redux_1.useSelector)(function (state) { return state.deck.isEmpty; });
    var numDeckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.numCards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards[state.deck.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (numDeckCards > 0)
            console.log("lastOfDeckVal: " + cards_js_1["default"][deckCards[deckCards.length - 1]].data);
        else
            console.log("empty deck");
    }, [deckCards]);
    var handleClick = function () {
        dispatch((0, discardSlice_1.addToDiscard)(topOfDeck)) && dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("h1", null,
                "numCards: ",
                numDeckCards),
            React.createElement("div", { className: "deck-buttons" },
                React.createElement("button", { onClick: function () { return handleClick(); } }, "Discard top of deck card"),
                React.createElement("span", null, isDeckFull ? "full" : ""),
                React.createElement("span", null, isDeckEmpty ? "empty" : "")),
            React.createElement("div", { className: "cards" }, deckCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "deck", isTopCard: index === deckCards[deckCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Deck;
