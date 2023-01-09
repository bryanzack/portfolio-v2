"use strict";
exports.__esModule = true;
var React = require('react');
require("./ButtonNav.css");
var hooks_1 = require("../../store/hooks");
var deckSlice_js_1 = require("../reducers/deckSlice.js");
var playerSlice_js_1 = require("../reducers/playerSlice.js");
var deckSlice_js_2 = require("../reducers/deckSlice.js");
var dealerSlice_js_1 = require("../reducers/dealerSlice.js");
var discardSlice_js_1 = require("../reducers/discardSlice.js");
var gameSlice_js_1 = require("../reducers/gameSlice.js");
var react_redux_1 = require("react-redux");
var cards_1 = require("../helpers/cards");
var ButtonNav = function () {
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var discardCards = (0, react_redux_1.useSelector)(function (state) { return state.discard.cards; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.didSomeoneWin; });
    var isDeckRepopulating = (0, react_redux_1.useSelector)(function (state) { return state.game.repopulating; });
    var dispatch = (0, hooks_1.useAppDispatch)();
    // if player hits and deck is not empty, hit as normal
    // else if deck is empty, repopulate deck with discard, and deal from top of new deck state
    var hitPlayerThunk = function () { return function (dispatch, getState) {
        var originalState = (0, deckSlice_js_1.selectCards)(getState());
        if (originalState.length !== 0) {
            if (cards_1["default"][originalState[originalState.length - 1]].val + playerScore > 21) {
                dispatch((0, gameSlice_js_1.determineWinner)("dealer"));
            }
            dispatch((0, playerSlice_js_1.addToPlayer)(originalState[originalState.length - 1]));
            dispatch((0, deckSlice_js_2.removeFromDeck)(originalState[originalState.length - 1]));
        }
        else {
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach(function (card) {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            var newState_1 = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(function () {
                if (cards_1["default"][newState_1[newState_1.length - 1]].val + playerScore > 21) {
                    dispatch((0, gameSlice_js_1.determineWinner)("dealer"));
                }
                dispatch((0, playerSlice_js_1.addToPlayer)(newState_1[newState_1.length - 1]));
                dispatch((0, deckSlice_js_2.removeFromDeck)(newState_1[newState_1.length - 1]));
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    }; };
    var newHandleStayThunk = function () { return function (dispatch, getState) {
        // given current deck state, how many cards can be dealt to the dealer
        // before dealer busts or reaches dealerScore > = 17?
        var originalDeck = (0, deckSlice_js_1.selectCards)(getState());
        var tmpDealerScore = dealerScore;
        var count = 0;
        if (originalDeck.length >= 7) {
            while (tmpDealerScore < 17) {
                tmpDealerScore += cards_1["default"][originalDeck[originalDeck.length - 1 - count]].val;
                dispatch((0, dealerSlice_js_1.addToDealer)(originalDeck[originalDeck.length - 1 - count]));
                dispatch((0, deckSlice_js_2.removeFromDeck)(originalDeck[originalDeck.length - 1 - count]));
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
            console.log("not enough cards for stay operation...");
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach(function (card) {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            var newDeck_1 = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(function () {
                while (tmpDealerScore < 17) {
                    tmpDealerScore += cards_1["default"][newDeck_1[newDeck_1.length - 1 - count]].val;
                    dispatch((0, dealerSlice_js_1.addToDealer)(newDeck_1[newDeck_1.length - 1 - count]));
                    dispatch((0, deckSlice_js_2.removeFromDeck)(newDeck_1[newDeck_1.length - 1 - count]));
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
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    }; };
    var dealDealer = function (card) {
        dispatch((0, dealerSlice_js_1.addToDealer)(card));
        dispatch((0, deckSlice_js_2.removeFromDeck)(card));
    };
    var dealPlayer = function (card) {
        dispatch((0, playerSlice_js_1.addToPlayer)(card));
        dispatch((0, deckSlice_js_2.removeFromDeck)(card));
    };
    var dealHandsThunk = function () { return function (dispatch, getState) {
        var originalDeck = (0, deckSlice_js_1.selectCards)(getState());
        if (originalDeck.length > 2) {
            dealDealer(deckCards[deckCards.length - 1]);
            dealPlayer(deckCards[deckCards.length - 2]);
            dealPlayer(deckCards[deckCards.length - 3]);
        }
        else {
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach(function (card) {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            var newDeck_2 = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(function () {
                dealDealer(newDeck_2[newDeck_2.length - 1]);
                dealPlayer(newDeck_2[newDeck_2.length - 2]);
                dealPlayer(newDeck_2[newDeck_2.length - 3]);
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    }; };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "button-container" },
            "totalNumCards: ",
            deckCards.length + discardCards.length + playerCards.length + dealerCards.length,
            React.createElement("div", { className: "play-button" }, playerCards.length === 0 &&
                React.createElement("button", { disabled: isDeckRepopulating, onClick: function () { return dispatch(dealHandsThunk()); } }, "Play")),
            React.createElement("div", { className: (playerScore > 0) ? "deal-buttons-active" : "deal-buttons-empty" },
                React.createElement("button", { onClick: function () { return dispatch(hitPlayerThunk()); }, disabled: winner }, "Hit"),
                React.createElement("button", { onClick: function () { return dispatch(newHandleStayThunk()); }, disabled: winner }, "Stay")))));
};
exports["default"] = ButtonNav;
