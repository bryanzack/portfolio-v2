"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Discard.css");
const react_redux_1 = require("react-redux");
const Card_js_1 = __importDefault(require("./Card.js"));
const Discard = () => {
    const discardCards = (0, react_redux_1.useSelector)((state) => state.discard.cards);
    return (<>
            <div className="discard">
                ({discardCards.length})
                <div className="cards">
                    {discardCards.map((index) => (<Card_js_1.default pile={"discard"} key={index} id={index}/>))}
                </div>
            </div>
        </>);
};
exports.default = Discard;
