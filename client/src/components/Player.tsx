const React = require('react');
import './Player.css';

import type { RootState } from '../store';
import {FC, ReactElement, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlayer, addToPlayer } from '../store/playerSlice';
import { addToDiscard } from '../store/discardSlice';
import { removeFromDeck } from '../store/deckSlice';
import { addToDealer } from '../store/dealerSlice';
import cards from './cards';
import Card from './Card.js';

const Player: FC = (props): ReactElement => {
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const playerScore = useSelector((state: RootState) => state.player.score);

    return (
        <>
            <div className="player">
                {playerScore}
                <div className="cards">
                    {playerCards.map((index) => (
                        <Card pile={"player"}
                            isTopCard={index === playerCards[playerCards.length-1]}
                            key={index}
                            id={index}
                            from={"player"}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Player;

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