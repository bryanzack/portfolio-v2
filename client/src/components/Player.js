"use strict";
exports.__esModule = true;
var React = require('react');
require("./Player.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var playerSlice_1 = require("../store/playerSlice");
var discardSlice_1 = require("../store/discardSlice");
var deckSlice_1 = require("../store/deckSlice");
var dealerSlice_1 = require("../store/dealerSlice");
var Card_js_1 = require("./Card.js");
var Player = function (props) {
    var numPlayerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards.length; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var topOfPlayer = (0, react_redux_1.useSelector)(function (state) { return playerCards[state.player.cards.length - 1]; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var isPlayerBust = (0, react_redux_1.useSelector)(function (state) { return state.player.isBust; });
    var isDealerBust = (0, react_redux_1.useSelector)(function (state) { return state.dealer.isBust; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleHit = function (card) {
        dispatch((0, playerSlice_1.addToPlayer)(topOfDeck));
        dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
    };
    var handleStay = function () {
        /*
        let score = 0;
        for (let i = 0; i < playerCards.length; i++) {
            //console.log(cards[playerCards[i]].val);
            score += cards[playerCards[i]].val;
        }
         */
        if (!isDealerBust) {
            dispatch((0, dealerSlice_1.addToDealer)(topOfDeck));
            dispatch((0, deckSlice_1.removeFromDeck)(topOfDeck));
        }
        // check sum of dealer hand
        // determine winner
    };
    var handleSingle = function (card) {
        dispatch((0, discardSlice_1.addToDiscard)(card));
        dispatch((0, playerSlice_1.removeFromPlayer)(card));
    };
    (0, react_1.useEffect)(function () {
        console.log(numPlayerCards);
    }, [numPlayerCards]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "player" },
            React.createElement("div", { className: "cards" }, playerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "player", isTopCard: index === playerCards[playerCards.length - 1], key: index, id: index })); })),
            React.createElement("div", { className: "player-buttons" },
                React.createElement("button", { disabled: numPlayerCards === 0, onClick: function () { return handleSingle(topOfPlayer); } }, "Send to discard"),
                React.createElement("button", { disabled: isPlayerBust, onClick: function () { return handleHit(topOfDeck); } }, "Hit"),
                React.createElement("button", { onClick: function () { return handleStay(); } }, "Stay")))));
};
exports["default"] = Player;
