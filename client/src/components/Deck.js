"use strict";
exports.__esModule = true;
var React = require('react');
require("./Deck.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var Card_js_1 = require("./Card.js");
var Deck = function (props) {
    var isDeckFull = (0, react_redux_1.useSelector)(function (state) { return state.deck.isFull; });
    var isDeckEmpty = (0, react_redux_1.useSelector)(function (state) { return state.deck.isEmpty; });
    var numDeckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.numCards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var isPlayerBust = (0, react_redux_1.useSelector)(function (state) { return state.player.isBust; });
    var numDiscardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.numCards; });
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleShuffle = function () {
        dispatch((0, deckSlice_1.shuffle)());
    };
    var handleReclaimOne = function (topOfDiscard) {
        dispatch((0, deckSlice_1.addToDeck)(topOfDiscard));
        dispatch((0, discardSlice_1.removeFromDiscard)(topOfDiscard));
    };
    (0, react_1.useEffect)(function () {
        handleShuffle();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("div", { className: "deck-buttons" },
                React.createElement("button", { onClick: function () { return handleShuffle(); } }, "Shuffle")),
            React.createElement("div", { className: "cards" }, deckCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "deck", isTopCard: index === deckCards[deckCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Deck;
