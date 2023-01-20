"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Player.css");
const react_redux_1 = require("react-redux");
const Card_js_1 = __importDefault(require("./Card.js"));
const Player = () => {
    const playerCards = (0, react_redux_1.useSelector)((state) => state.player.cards);
    const playerScore = (0, react_redux_1.useSelector)((state) => state.player.score);
    const debug_mode = (0, react_redux_1.useSelector)((state) => state.game.debug);
    return (<>
            <div className="player">
                {debug_mode && `${playerCards.length} (${playerScore})`}
                <div className="cards">
                    {playerCards.map((index) => (<Card_js_1.default pile={"player"} key={index} id={index} from={"player"}/>))}
                </div>
            </div>
        </>);
};
exports.default = Player;
/*

                <div className="player-buttons">
                    <button  disabled={numPlayerCards === 0} onClick={() => handleSingle(topOfPlayer)}>
                        Send to discard
                    </button>
                    <button disabled={isPlayerBust} onClick={() => handleHit(topOfDeck)}>
                        Hit
                    </button>
                    <button onClick={() => handleStay()}>
                        Stay
                    </button>
                </div>
 */ 
