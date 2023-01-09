"use strict";
exports.__esModule = true;
var React = require('react');
require("./Player.css");
var react_redux_1 = require("react-redux");
var Card_js_1 = require("./Card.js");
var Player = function () {
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "player" },
            playerScore,
            React.createElement("div", { className: "cards" }, playerCards.map(function (index) { return (React.createElement(Card_js_1["default"], { pile: "player", key: index, id: index, from: "player" })); })))));
};
exports["default"] = Player;
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
