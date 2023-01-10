"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Popup.css");
const react_redux_1 = require("react-redux");
const react_spring_1 = require("react-spring");
const gameSlice_1 = require("../reducers/gameSlice");
const discardSlice_1 = require("../reducers/discardSlice");
const playerSlice_1 = require("../reducers/playerSlice");
const dealerSlice_1 = require("../reducers/dealerSlice");
const Popup = (style, closePopup) => {
    const winner = (0, react_redux_1.useSelector)((state) => state.game.winner);
    const transitions = (0, react_spring_1.useTransition)(winner, {
        from: {
            scale: "150%",
            opacity: 0,
        },
        enter: {
            scale: "100%",
            opacity: 1,
        },
        leave: {
            scale: "150%",
            opacity: 0,
        },
        config: {
            duration: 300,
        },
    });
    const playerCards = (0, react_redux_1.useSelector)((state) => state.player.cards);
    const dealerCards = (0, react_redux_1.useSelector)((state) => state.dealer.cards);
    const deckCards = (0, react_redux_1.useSelector)((state) => state.deck.cards);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClose = () => {
        dispatch((0, gameSlice_1.resetGame)());
        playerCards.forEach((card) => {
            dispatch((0, discardSlice_1.addToDiscard)(card));
            dispatch((0, playerSlice_1.removeFromPlayer)(card));
        });
        dealerCards.forEach((card) => {
            dispatch((0, discardSlice_1.addToDiscard)(card));
            dispatch((0, dealerSlice_1.removeFromDealer)(card));
        });
        console.log(deckCards.length);
    };
    return transitions((style) => (<react_spring_1.animated.div style={style} className={"popup"}>
            <h3 className={"popup-title"}>
                {winner === "push" ? "Tie!" : winner === "dealer" ? "You lose!" : winner === "player" ? "You win!" : ""}</h3>
            <p className={"popup-content"}>content</p>
            <button onClick={handleClose} className={"popup-close-button"}>
                close
            </button>
        </react_spring_1.animated.div>));
};
exports.default = Popup;
