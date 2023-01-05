"use strict";
exports.__esModule = true;
var React = require('react');
require("./Blackjack.css");
var react_redux_1 = require("react-redux");
var web_1 = require("@react-spring/web");
var Deck_js_1 = require("./Deck.js");
var Discard_js_1 = require("./Discard.js");
var Player_js_1 = require("./Player.js");
var Dealer_js_1 = require("./Dealer.js");
var ButtonNav_js_1 = require("./ButtonNav.js");
var Blackjack = function () {
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.winner; });
    var animatePopup = (0, web_1.useSpring)({
        from: {
            x: "-100%vw"
        },
        to: {
            x: "0vw"
        },
        config: {
            duration: 1000
        }
    });
    return (React.createElement("div", { className: "blackjack" },
        React.createElement("div", { className: "top" },
            React.createElement("div", { className: "top-container" },
                React.createElement(Discard_js_1["default"], null),
                React.createElement(Dealer_js_1["default"], null),
                React.createElement(Deck_js_1["default"], null))),
        React.createElement(web_1.animated.div, { style: animatePopup, className: "status" },
            React.createElement("p", null, winner)),
        React.createElement("div", { className: "bot" },
            React.createElement("div", { className: "bot-container" },
                React.createElement(Player_js_1["default"], null),
                React.createElement(ButtonNav_js_1["default"], null)))));
};
exports["default"] = Blackjack;
