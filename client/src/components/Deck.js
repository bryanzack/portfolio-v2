"use strict";
exports.__esModule = true;
var React = require('react');
require("./Deck.css");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../store/deckSlice");
var discardSlice_1 = require("../store/discardSlice");
var playerSlice_1 = require("../store/playerSlice");
var Card_js_1 = require("./Card.js");
var Deck = function (props) {
    var isDeckFull = (0, react_redux_1.useSelector)(function (state) { return state.deck.isFull; });
    var isDeckEmpty = (0, react_redux_1.useSelector)(function (state) { return state.deck.isEmpty; });
    var numDeckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.numCards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var numPlayerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.numCards; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleSingle = function (pile, topOfDeck) {
        if (pile == 'discard') {
            dispatch((0, discardSlice_1.addToDiscard)(topOfDeck));
            dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
        }
        else if (pile === 'player') {
            console.log(numPlayerCards);
            if (numDeckCards > 0 && numPlayerCards < 2) {
                dispatch((0, playerSlice_1.addToPlayer)(topOfDeck));
                dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
            }
        }
    };
    var handleAll = function (pile) {
        var tmp = 0;
        for (var i = topOfDeck; i > 0; i-- && tmp++) {
            handleSingle(pile, topOfDeck - tmp);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            React.createElement("h1", null,
                "numCards: ",
                numDeckCards),
            React.createElement("div", { className: "deck-buttons" },
                React.createElement("button", { onClick: function () { return handleSingle('discard', topOfDeck); } }, "Send to discard"),
                React.createElement("button", { onClick: function () { return handleSingle('player', topOfDeck); } }, "Deal card"),
                React.createElement("span", null, isDeckFull ? "full" : ""),
                React.createElement("span", null, isDeckEmpty ? "empty" : "")),
            React.createElement("div", { className: "cards" }, deckCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "deck", isTopCard: index === deckCards[deckCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Deck;
