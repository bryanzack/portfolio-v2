"use strict";
exports.__esModule = true;
var React = require('react');
require("./Card.css");
var cards_1 = require("./cards");
var web_1 = require("@react-spring/web");
var Card = function (props) {
    var sendToDiscard = (0, web_1.useSpring)({
        from: {
            x: "25vw",
            scaleX: "1",
            transform: "rotate(0deg)"
        },
        to: {
            x: "0vw",
            scaleX: "-1",
            transform: "rotate(180deg)"
        }
    });
    var sendToDeck = (0, web_1.useSpring)({
        from: { x: "-25vw" },
        to: { x: "0vw" }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: "card-container", style: props.pile == "deck" ? sendToDeck : sendToDiscard },
            React.createElement("img", { className: "card-front", src: require("./../svg_playing_cards/fronts/png_96_dpi/".concat(cards_1["default"][props.id].path, ".png")), alt: "card", height: "130px", width: "100px" }),
            React.createElement("img", { className: "card-back", src: require('./../svg_playing_cards/backs/png_96_dpi/abstract.png'), alt: "card", height: "130px", width: "100px" }))));
};
exports["default"] = Card;
