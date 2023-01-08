"use strict";
exports.__esModule = true;
var React = require('react');
require("./ButtonNav.css");
var playerSlice_js_1 = require("../store/playerSlice.js");
var deckSlice_js_1 = require("../store/deckSlice.js");
var dealerSlice_js_1 = require("../store/dealerSlice.js");
var discardSlice_js_1 = require("../store/discardSlice.js");
var gameSlice_js_1 = require("../store/gameSlice.js");
var react_redux_1 = require("react-redux");
var cards_1 = require("./cards");
var ButtonNav = function () {
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.didSomeoneWin; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var repopulateDeck = function () {
        discardCards.forEach(function (card) {
            dispatch((0, deckSlice_js_1.addToDeck)(card));
            dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
        });
    };
    var hitPlayer = function () {
        if (deckCards.length !== 0) {
            if (cards_1["default"][deckCards.length - 1].val + playerScore > 21) {
                dispatch((0, gameSlice_js_1.determineWinner)("dealer"));
            }
            dispatch((0, playerSlice_js_1.addToPlayer)(deckCards[deckCards.length - 1]));
            dispatch((0, deckSlice_js_1.removeFromDeck)(deckCards[deckCards.length - 1]));
        }
        else {
            console.log("NOT ENOUGH CARDS FOR hitPlayer()...");
            repopulateDeck();
        }
    };
    var handleStay = function () {
        if (deckCards.length !== 0) {
            var tmpDealerScore = dealerScore;
            var count = 0;
            while (tmpDealerScore < 17) {
                tmpDealerScore += cards_1["default"][deckCards[deckCards.length - 1 - count]].val;
                console.log("adding to dealer: ", deckCards[deckCards.length - 1 - count]);
                dispatch((0, dealerSlice_js_1.addToDealer)(deckCards[deckCards.length - 1 - count]));
                dispatch((0, deckSlice_js_1.removeFromDeck)(deckCards[deckCards.length - 1 - count]));
                count++;
            }
            if (tmpDealerScore > 21) {
                dispatch((0, gameSlice_js_1.determineWinner)('player'));
            }
            else if (tmpDealerScore <= 21 && tmpDealerScore > playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('dealer'));
            }
            else if (tmpDealerScore <= 21 && tmpDealerScore < playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('player'));
            }
            else if (tmpDealerScore === playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('push'));
            }
        }
        else {
            console.log("NOT ENOUGH CARDS FOR handleStay()...");
            repopulateDeck();
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
        // why is topOfDeck undefined sometimes?
        if (deckCards.length > 2) {
            dealDealer(deckCards[deckCards.length - 1]);
            dealPlayer(deckCards[deckCards.length - 2]);
            dealPlayer(deckCards[deckCards.length - 3]);
        }
        else {
            console.log("NOT ENOUGH CARDS TO FOR dealHands()...");
            repopulateDeck();
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "button-container" },
            "totalNumCards: ",
            deckCards.length + discardCards.length + playerCards.length + dealerCards.length,
            React.createElement("div", { className: "play-button" }, playerCards.length === 0 &&
                React.createElement("button", { disabled: playerCards.length !== 0, onClick: function () { return (dealHands()); } }, "Play")),
            React.createElement("div", { className: playerScore > 0 ? "deal-buttons-active" : "deal-buttons-empty" },
                React.createElement("button", { onClick: function () { return hitPlayer(); }, disabled: winner }, "Hit"),
                React.createElement("button", { onClick: function () { return handleStay(); }, disabled: winner }, "Stay")))));
};
exports["default"] = ButtonNav;
