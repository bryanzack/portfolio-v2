"use strict";
exports.__esModule = true;
var React = require('react');
require("./Popup.css");
var react_redux_1 = require("react-redux");
var react_spring_1 = require("react-spring");
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
    return transitions(function (style) { return (React.createElement(react_spring_1.animated.div, { style: style, className: "popup" },
        React.createElement("h3", { className: "popup-title" }, winner === "player" ? "You win!" : "You Lose!"),
        React.createElement("p", { className: "popup-content" }, "content"),
        React.createElement("button", { className: "popup-close-button" }, "close"))); });
};
exports["default"] = Popup;
