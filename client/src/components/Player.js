"use strict";
exports.__esModule = true;
var React = require('react');
require("./Player.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var playerSlice_1 = require("../store/playerSlice");
var discardSlice_1 = require("../store/discardSlice");
var Card_js_1 = require("./Card.js");
var Player = function (props) {
    var numPlayerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.numCards; });
    var isPlayerFull = (0, react_redux_1.useSelector)(function (state) { return state.player.isFull; });
    var isPlayerEmpty = (0, react_redux_1.useSelector)(function (state) { return state.player.isEmpty; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return playerCards[state.deck.cards.length - 1]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        console.log(playerCards);
    }, [playerCards]);
    var handleSingle = function (topOfDeck) {
        dispatch((0, discardSlice_1.addToDiscard)(topOfDeck));
        dispatch((0, playerSlice_1.removeFromPlayer)(topOfDeck));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "player" },
            React.createElement("h1", null,
                " numCards: ",
                numPlayerCards),
            React.createElement("div", { className: "player-buttons" },
                React.createElement("button", { onClick: function () { return handleSingle(topOfDeck); } }, "Send to discard"),
                React.createElement("span", null, isPlayerFull ? "full" : ""),
                React.createElement("span", null, isPlayerEmpty ? "empty" : "")),
            React.createElement("div", { className: "cards" }, playerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "player", isTopCard: index === playerCards[playerCards.length - 1], key: index, id: index })); })))));
};
exports["default"] = Player;
