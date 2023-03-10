const React = require('react');
import './Popup.css';

import { FC, ReactElement } from "react";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { resetGame } from '../reducers/gameSlice';
import { addToDiscard } from '../reducers/discardSlice';
import { removeFromPlayer } from '../reducers/playerSlice';
import { removeFromDealer } from '../reducers/dealerSlice';

const Popup = (style: any, closePopup: any): ReactElement => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const transitions = useTransition(winner, {
        from: {
            ...style,
            scale: "150%",
            opacity: 0,
        },
        enter: {
            ...style,
            scale: "100%",
            opacity: 1,
        },
        leave: {
            ...style,
            scale: "150%",
            opacity: 0,
        },
        config: {
            duration: 300,
        },
    });
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(resetGame());
        playerCards.forEach((card: number) => {
            dispatch(addToDiscard(card));
            dispatch(removeFromPlayer(card));
        });
        dealerCards.forEach((card: number) => {
            dispatch(addToDiscard(card));
            dispatch(removeFromDealer(card));
        });
        console.log(deckCards.length);
    }

    return transitions((style) => (
        <animated.div style={style} className={"popup"}>
            <h3 className={"popup-title"}>
                {winner === "push" ? "Tie!" : winner === "dealer" ? "You lose!" : winner === "player" ? "You win!" : ""}</h3>
            <p className={"popup-content"} />
            <button onClick={handleClose} className={"popup-close-button"}>
                close
            </button>
        </animated.div>
    ));
};

export default Popup;