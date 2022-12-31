const React = require('react');
import './Player.css';

import type { RootState } from '../store';
import {FC, ReactElement, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlayer } from '../store/playerSlice';
import { addToDiscard } from '../store/discardSlice';

import Card from './Card.js';

const Player: FC = (props): ReactElement => {
    const numPlayerCards = useSelector((state: RootState) => state.player.numCards);
    const isPlayerFull = useSelector((state: RootState) => state.player.isFull);
    const isPlayerEmpty = useSelector((state: RootState) => state.player.isEmpty);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const topOfDeck = useSelector((state: RootState) => playerCards[state.player.cards.length-1]);
    const dispatch = useDispatch();

    const handleSingle = (topOfDeck: number): void => {
        if (numPlayerCards > 0) {
            dispatch(addToDiscard(topOfDeck));
            dispatch(removeFromPlayer(topOfDeck));
        }
    }
    useEffect(() => {
        console.log(playerCards);
    }, [playerCards]);

    return (
        <>
            <div className="player">
                <h1> numCards: {numPlayerCards}</h1>
                <div className="player-buttons">
                    <button onClick={() => handleSingle(topOfDeck)}>
                        Send to discard
                    </button>
                    <span>{isPlayerFull ? "full" : ""}</span>
                    <span>{isPlayerEmpty ? "empty" : ""}</span>
                </div>
                <div className="cards">
                    {playerCards.map((index) => (
                        <Card pile={"player"}
                            isTopCard={index === playerCards[playerCards.length-1]}
                            key={index}
                            id={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Player;