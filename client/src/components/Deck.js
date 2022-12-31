"use strict";
exports.__esModule = true;
var discardSlice_1 = require("../store/discardSlice");
var React = require('react');
require("./Deck.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var deckSlice_2 = require("../store/deckSlice");
var playerSlice_1 = require("../store/playerSlice");
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
        dispatch((0, deckSlice_2.shuffle)());
    };
    var handleDeal = function (topOfDeck) {
        if (!isPlayerBust) {
            dispatch((0, playerSlice_1.addToPlayer)(topOfDeck));
            dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
        }
    };
    var handleReclaimOne = function (topOfDiscard) {
        dispatch((0, deckSlice_1.addToDeck)(topOfDiscard));
        dispatch((0, discardSlice_1.removeFromDiscard)(topOfDiscard));
    };
    var handleReclaimAll = function () {
        var tmp = 0;
        for (var i = numDiscardCards; i >= 0; i-- && tmp++) {
            handleReclaimOne(discardCards[i - 1]);
        }
    };
    (0, react_1.useEffect)(function () {
        console.log("Reclaim discard and deal one card");
        //handleReclaimAll();
    }, [numDeckCards === 0]);
    (0, react_1.useEffect)(function () {
        handleShuffle();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("h1", null,
                "numCards: ",
                numDeckCards),
            React.createElement("div", { className: "deck-buttons" },
                React.createElement("button", { onClick: function () { return handleShuffle(); } }, "Shuffle"),
                React.createElement("button", { onClick: function () { return handleDeal(topOfDeck); } }, "Deal card"),
                React.createElement("span", null, isDeckFull ? "full" : ""),
                React.createElement("span", null, isDeckEmpty ? "empty" : "")),
            React.createElement("div", { className: "cards" }, deckCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "deck", isTopCard: index === deckCards[deckCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Deck;
