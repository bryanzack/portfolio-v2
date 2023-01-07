"use strict";
exports.__esModule = true;
var React = require('react');
require("./Popup.css");
var react_redux_1 = require("react-redux");
var react_spring_1 = require("react-spring");
var gameSlice_1 = require("../store/gameSlice");
var discardSlice_1 = require("../store/discardSlice");
var playerSlice_1 = require("../store/playerSlice");
var dealerSlice_1 = require("../store/dealerSlice");
var Popup = function (style, closePopup) {
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.winner; });
    var transitions = (0, react_spring_1.useTransition)(winner, {
        from: {
            scale: "150%",
            opacity: 0
        },
        enter: {
            scale: "100%",
            opacity: 1
        },
        leave: {
            scale: "150%",
            opacity: 0
        },
        config: {
            duration: 300
        }
    });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
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
    };
    var dispatch = (0, react_redux_1.useDispatch)();
    return transitions(function (style) { return (React.createElement(react_spring_1.animated.div, { style: style, className: "popup" },
        React.createElement("h3", { className: "popup-title" }, winner === "push" ? "Tie!" : winner === "dealer" ? "You lose!" : winner === "player" ? "You win!" : ""),
        React.createElement("p", { className: "popup-content" }, "content"),
        React.createElement("button", { onClick: handleClose, className: "popup-close-button" }, "close"))); });
};
exports["default"] = Popup;
