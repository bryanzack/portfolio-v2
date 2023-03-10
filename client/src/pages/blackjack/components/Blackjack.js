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
var Popup_js_1 = require("./Popup.js");
var HelpTab_1 = require("./HelpTab");
var Blackjack = function () {
    var winner = (0, react_redux_1.useSelector)(function (state) { return state.game.winner; });
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { style: style, className: "blackjack" },
            React.createElement("div", { className: "popup" },
                React.createElement(Popup_js_1["default"], { winner: winner })),
            React.createElement(HelpTab_1["default"], null),
            React.createElement("div", { className: winner ? "blackjack-blur" : "blackjack" },
                React.createElement("div", { className: "top" },
                    React.createElement("div", { className: "top-container" },
                        React.createElement(Discard_js_1["default"], null),
                        React.createElement(Dealer_js_1["default"], null),
                        React.createElement(Deck_js_1["default"], null))),
                React.createElement("div", { className: "bot" },
                    React.createElement("div", { className: "bot-container" },
                        React.createElement(Player_js_1["default"], null),
                        React.createElement(ButtonNav_js_1["default"], null))))))); });
};
exports["default"] = Blackjack;
