"use strict";
exports.__esModule = true;
var react_spring_1 = require("react-spring");
var React = require('react');
require("./Player.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var playerSlice_1 = require("../store/playerSlice");
var discardSlice_1 = require("../store/discardSlice");
var Card_js_1 = require("./Card.js");
var Player = function (props) {
    var numPlayerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards.length; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var topOfPlayer = (0, react_redux_1.useSelector)(function (state) { return playerCards[state.player.cards.length - 1]; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var isPlayerBust = (0, react_redux_1.useSelector)(function (state) { return state.player.isBust; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleSingle = function (card) {
        dispatch((0, discardSlice_1.addToDiscard)(card));
        dispatch((0, playerSlice_1.removeFromPlayer)(card));
    };
    (0, react_1.useEffect)(function () {
        console.log(numPlayerCards);
    }, [numPlayerCards]);
    var transitions = (0, react_spring_1.useTransition)(null, {
        from: { opacity: 1 },
        enter: { opacity: 0 },
        leave: { opacity: 1 }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "player" },
            React.createElement("div", { className: "cards" }, playerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "player", isTopCard: index === playerCards[playerCards.length - 1], key: index, id: index })); })),
            React.createElement("div", { className: "player-buttons" },
                React.createElement("button", { disabled: numPlayerCards === 0, onClick: function () { return handleSingle(topOfPlayer); } }, "Send to discard")))));
};
exports["default"] = Player;
