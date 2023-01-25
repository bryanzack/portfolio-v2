"use strict";
exports.__esModule = true;
var React = require('react');
require("./Card.css");
var cards_1 = require("../helpers/cards");
var react_redux_1 = require("react-redux");
var web_1 = require("@react-spring/web");
var processCard_js_1 = require("../helpers/processCard.js");
var Card = function (props) {
    var card_theme = (0, react_redux_1.useSelector)(function (state) { return state.card.theme; });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: (props.pile === "player" || props.pile === "dealer") ? "card-container-hand" : "card-container", style: (0, web_1.useSpring)((0, processCard_js_1["default"])(props.pile, props.from)) },
            React.createElement("img", { className: "card-back", src: require("../static/svg_playing_cards/fronts/png_96_dpi/".concat(cards_1["default"][props.id].path, ".png")), alt: "card", height: "130px", width: "100px" }),
            React.createElement("img", { className: "card-front", src: require("../static/svg_playing_cards/backs/png_96_dpi/".concat(card_theme, ".png")), alt: "card", height: "130px", width: "100px" }))));
};
exports["default"] = Card;
