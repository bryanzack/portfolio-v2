"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require('react');
require("./Popup.css");
var react_redux_1 = require("react-redux");
var react_spring_1 = require("react-spring");
var gameSlice_1 = require("../reducers/gameSlice");
var discardSlice_1 = require("../reducers/discardSlice");
var playerSlice_1 = require("../reducers/playerSlice");
var dealerSlice_1 = require("../reducers/dealerSlice");
var Popup = function (style, closePopup) {
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.winner; });
    var transitions = (0, react_spring_1.useTransition)(winner, {
        from: __assign(__assign({}, style), { scale: "150%", opacity: 0 }),
        enter: __assign(__assign({}, style), { scale: "100%", opacity: 1 }),
        leave: __assign(__assign({}, style), { scale: "150%", opacity: 0 }),
        config: {
            duration: 300
        }
    });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleClose = function () {
        dispatch((0, gameSlice_1.resetGame)());
        playerCards.forEach(function (card) {
            dispatch((0, discardSlice_1.addToDiscard)(card));
            dispatch((0, playerSlice_1.removeFromPlayer)(card));
        });
        dealerCards.forEach(function (card) {
            dispatch((0, discardSlice_1.addToDiscard)(card));
            dispatch((0, dealerSlice_1.removeFromDealer)(card));
        });
        console.log(deckCards.length);
    };
    return transitions(function (style) { return (React.createElement(react_spring_1.animated.div, { style: style, className: "popup" },
        React.createElement("h3", { className: "popup-title" }, winner === "push" ? "Tie!" : winner === "dealer" ? "You lose!" : winner === "player" ? "You win!" : ""),
        React.createElement("p", { className: "popup-content" }),
        React.createElement("button", { onClick: handleClose, className: "popup-close-button" }, "close"))); });
};
exports["default"] = Popup;
