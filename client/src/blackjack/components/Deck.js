"use strict";
exports.__esModule = true;
var React = require('react');
require("./Deck.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var deckSlice_1 = require("../reducers/deckSlice");
var Card_js_1 = require("./Card.js");
var Deck = function (props) {
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var debug_mode = (0, react_redux_1.useSelector)(function (state) { return state.game.debug; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleShuffle = function () {
        dispatch((0, deckSlice_1.shuffle)());
    };
    (0, react_1.useEffect)(function () {
        handleShuffle();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "deck" },
            debug_mode && deckCards.length,
            React.createElement("div", { className: "cards" }, deckCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "deck", key: index, id: index })); })))));
};
exports["default"] = Deck;
