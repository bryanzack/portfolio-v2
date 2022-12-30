"use strict";
exports.__esModule = true;
var React = require('react');
require("./Card.css");
var cards_1 = require("./cards");
var react_redux_1 = require("react-redux");
var web_1 = require("@react-spring/web");
var Card = function (props) {
    var card_theme = (0, react_redux_1.useSelector)(function (state) { return state.card.theme; });
    var sendToDiscard = (0, web_1.useSpring)({
        from: {
            x: "25vw",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            scaleX: -1,
            transform: "rotateX(180deg) rotateY(360deg)"
        },
        config: {
            mass: 1,
            tension: 300,
            friction: 20
        }
    });
    var sendToDeck = (0, web_1.useSpring)({
        from: {
            x: "-25vw",
            scaleX: 1,
            transform: "rotateX(180deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            scaleX: 1,
            transform: "rotateX(0deg), rotateY(0deg)"
        }
    });
    var sendToPlayer = (0, web_1.useSpring)({
        from: {
            x: "15vw",
            y: "-35vh",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            y: "0vh",
            scaleX: -1,
            transform: "rotateX(180deg) rotateY(0deg)"
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: "card-container", style: props.pile == "deck" ? sendToDeck :
                props.pile == "discard" ? sendToDiscard : sendToPlayer },
            React.createElement("img", { className: "card-back", src: require("./../svg_playing_cards/fronts/png_96_dpi/".concat(cards_1["default"][props.id].path, ".png")), alt: "card", height: "130px", width: "100px" }),
            React.createElement("img", { className: "card-front", src: require("./../svg_playing_cards/backs/png_96_dpi/".concat(card_theme, ".png")), alt: "card", height: "130px", width: "100px" }))));
};
exports["default"] = Card;
