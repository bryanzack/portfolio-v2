"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Blackjack.css");
const react_redux_1 = require("react-redux");
const Deck_js_1 = __importDefault(require("./Deck.js"));
const Discard_js_1 = __importDefault(require("./Discard.js"));
const Player_js_1 = __importDefault(require("./Player.js"));
const Dealer_js_1 = __importDefault(require("./Dealer.js"));
const ButtonNav_js_1 = __importDefault(require("./ButtonNav.js"));
const Popup_js_1 = __importDefault(require("./Popup.js"));
const Blackjack = () => {
    const playerScore = (0, react_redux_1.useSelector)((state) => state.player.score);
    const dealerScore = (0, react_redux_1.useSelector)((state) => state.dealer.score);
    const winner = (0, react_redux_1.useSelector)((state) => state.game.winner);
    return (<>
            <div className="popup">
                <Popup_js_1.default winner={winner}/>
            </div>
            <div className={winner ? "blackjack-blur" : "blackjack"}>
                <div className="top">
                    <div className="top-container">
                        <Discard_js_1.default />
                        <Dealer_js_1.default />
                        <Deck_js_1.default />
                    </div>
                </div>
                <div className="bot">
                    <div className="bot-container">
                        <Player_js_1.default />
                        <ButtonNav_js_1.default />
                    </div>
                </div>
            </div>
        </>);
};
exports.default = Blackjack;
