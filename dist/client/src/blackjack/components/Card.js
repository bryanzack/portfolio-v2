"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Card.css");
const cards_1 = __importDefault(require("../helpers/cards"));
const react_redux_1 = require("react-redux");
const web_1 = require("@react-spring/web");
const processCard_js_1 = __importDefault(require("../helpers/processCard.js"));
const Card = (props) => {
    const card_theme = (0, react_redux_1.useSelector)((state) => state.card.theme);
    return (<>
            <web_1.animated.div className={(props.pile === "player" || props.pile === "dealer") ? "card-container-hand" : "card-container"} style={(0, web_1.useSpring)((0, processCard_js_1.default)(props.pile, props.from))}>
                <img className="card-back" src={require(`./../svg_playing_cards/fronts/png_96_dpi/${cards_1.default[props.id].path}.png`)} alt={"card"} height={"130px"} width={"100px"}/>
                <img className="card-front" src={require(`./../svg_playing_cards/backs/png_96_dpi/${card_theme}.png`)} alt={"card"} height={"130px"} width={"100px"}/>
            </web_1.animated.div>
        </>);
};
exports.default = Card;
