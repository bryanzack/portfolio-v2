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
            x: "15vw",
            y: "35vh",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            y: "0vh",
            scaleX: -1,
            transform: "rotateX(180deg) rotateY(180deg)"
        },
        config: {
            mass: 1
        }
    });
    var sendToDeck = (0, web_1.useSpring)({
        from: {
            x: "-30vw",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            scaleX: 1,
            transform: "rotateX(0deg), rotateY(0deg)"
        },
        config: {
            mass: 2,
            tension: 900,
            frequency: .6,
            damping: 1
        }
    });
    var sendToPlayer = (0, web_1.useSpring)({
        from: {
            x: "15vw",
            y: "-30vh",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)"
        },
        to: {
            x: "0vw",
            y: "0vh",
            scaleX: -1,
            transform: "rotateX(180deg) rotateY(360deg)"
        },
        config: {
            mass: 2,
            tension: 200,
            friction: 30
        }
    });
    var fromDealerToDiscard = (0, web_1.useSpring)({
        from: {
            x: "0vw",
            y: "0vh"
        },
        to: {
            x: "-10vw",
            y: "0vh"
        }
    });
    var fromDeckToDealer = (0, web_1.useSpring)({
        from: {
            x: "-20vw",
            y: "-3vh"
        },
        to: {
            x: "0vw",
            y: "0vh"
        },
        config: {}
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: props.pile === "player" ? "card-container-player" :
                props.pile === "dealer" ? "card-container-player" : "card-container", style: props.pile === "deck" ? sendToDeck :
                props.pile === "discard" ? sendToDiscard :
                    props.pile === "dealer" ? fromDeckToDealer : sendToPlayer },
            React.createElement("img", { className: "card-back", src: require("./../svg_playing_cards/fronts/png_96_dpi/".concat(cards_1["default"][props.id].path, ".png")), alt: "card", height: "130px", width: "100px" }),
            React.createElement("img", { className: "card-front", src: require("./../svg_playing_cards/backs/png_96_dpi/".concat(card_theme, ".png")), alt: "card", height: "130px", width: "100px" }))));
};
exports["default"] = Card;
