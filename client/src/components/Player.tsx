import {useTransition} from "react-spring";

const React = require('react');
import './Player.css';

import type { RootState } from '../store';
import {FC, ReactElement, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlayer } from '../store/playerSlice';
import { addToDiscard } from '../store/discardSlice';

import Card from './Card.js';

const Player: FC = (props): ReactElement => {
    const numPlayerCards = useSelector((state: RootState) => state.player.cards.length);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const topOfPlayer = useSelector((state: RootState) => playerCards[state.player.cards.length-1]);
    const playerScore = useSelector((state: RootState) => state.player.score);
    const isPlayerBust = useSelector((state: RootState) => state.player.isBust);
    const dispatch = useDispatch();

    const handleSingle = (card: number): void => {
            dispatch(addToDiscard(card));
            dispatch(removeFromPlayer(card));
    }
    useEffect(() => {
        console.log(numPlayerCards);
    }, [numPlayerCards]);
    const transitions = useTransition(null, {
        from: { opacity: 1 },
        enter: { opacity: 0 },
        leave: { opacity: 1 },
    });
    return (
        <>
            <div className="player">
                <div className="cards">
                    {playerCards.map((index) => (
                        <Card pile={"player"}
                            isTopCard={index === playerCards[playerCards.length-1]}
                            key={index}
                            id={index}/>
                    ))}
                </div>
                <div className="player-buttons">
                    <button  disabled={numPlayerCards === 0} onClick={() => handleSingle(topOfPlayer)}>
                        Send to discard
                    </button>
                </div>
            </div>
        </>
    );
}

export default Player;