const React = require('react');
import {ReactElement} from "react";
import './Popup.css';

import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { resetGame } from '../store/gameSlice';
import { addToDiscard } from '../store/discardSlice';
import { removeFromPlayer } from '../store/playerSlice';
import { removeFromDealer } from '../store/dealerSlice';

const Popup = ( style: any, closePopup: any ): ReactElement => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const transitions = useTransition(winner, {
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
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const handleClose = () => {
        dispatch(resetGame());
        playerCards.forEach((card) => {
            dispatch(addToDiscard(card));
            dispatch(removeFromPlayer(card));
        });
        dealerCards.forEach((card) => {
            dispatch(addToDiscard(card));
            dispatch(removeFromDealer(card));
        });
    }
    const dispatch = useDispatch();

    return transitions((style) => (
        <animated.div style={style} className={"popup"}>
            <h3 className={"popup-title"}>
                {winner === "push" ? "Tie!" : winner === "dealer" ? "You lose!" : winner === "player" ? "You win!" : ""}</h3>
            <p className={"popup-content"}>content</p>
            <button onClick={handleClose} className={"popup-close-button"}>
                close
            </button>
        </animated.div>
    ));
};

export default Popup;