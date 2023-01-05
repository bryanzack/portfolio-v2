"use strict";
exports.__esModule = true;
var React = require('react');
require("./ButtonNav.css");
var playerSlice_js_1 = require("../store/playerSlice.js");
var deckSlice_js_1 = require("../store/deckSlice.js");
var dealerSlice_js_1 = require("../store/dealerSlice.js");
var gameSlice_1 = require("../store/gameSlice");
var react_redux_1 = require("react-redux");
var cards_1 = require("./cards");
var ButtonNav = function () {
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var hitPlayer = function () {
        if (cards_1["default"][topOfDeck].val + playerScore > 21) {
            dispatch((0, gameSlice_1.determineWinner)("dealer"));
        }
        dispatch((0, playerSlice_js_1.addToPlayer)(topOfDeck));
        dispatch((0, deckSlice_js_1.removeFromDeck)(topOfDeck));
    };
    var handleStay = function () {
        var tmpDealerScore = dealerScore;
        var count = 0;
        while (tmpDealerScore < 17) {
            tmpDealerScore += cards_1["default"][deckCards[deckCards.length - 1 - count]].val;
            dispatch((0, dealerSlice_js_1.addToDealer)(deckCards[deckCards.length - 1 - count]));
            dispatch((0, deckSlice_js_1.removeFromDeck)(deckCards[deckCards.length - 1 - count]));
            count++;
        }
        if (tmpDealerScore > 21) {
            dispatch((0, gameSlice_1.determineWinner)('player'));
        }
        else if (tmpDealerScore <= 21 && tmpDealerScore > playerScore) {
            dispatch((0, gameSlice_1.determineWinner)('dealer'));
        }
        else if (tmpDealerScore <= 21 && tmpDealerScore < playerScore) {
            dispatch((0, gameSlice_1.determineWinner)('player'));
        }
        else if (tmpDealerScore === playerScore) {
            dispatch((0, gameSlice_1.determineWinner)('push'));
        }
    };
    var dealDealer = function (card) {
        dispatch((0, dealerSlice_js_1.addToDealer)(card));
        dispatch((0, deckSlice_js_1.removeFromDeck)(card));
    };
    var dealPlayer = function (card) {
        dispatch((0, playerSlice_js_1.addToPlayer)(card));
        dispatch((0, deckSlice_js_1.removeFromDeck)(card));
    };
    var dealHands = function () {
        dealDealer(deckCards[topOfDeck]);
        dealPlayer(deckCards[topOfDeck - 1]);
        dealPlayer(deckCards[topOfDeck - 2]);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "button-container" },
            playerCards.length === 0 &&
                React.createElement("button", { disabled: playerCards.length !== 0, onClick: function () { return (dealHands()); } }, "Play"),
            React.createElement("button", { onClick: function () { return hitPlayer(); }, disabled: playerScore > 21 }, "Hit"),
            React.createElement("button", { onClick: function () { return handleStay(); }, disabled: playerCards.length === 0 }, "Stay"))));
};
exports["default"] = ButtonNav;
