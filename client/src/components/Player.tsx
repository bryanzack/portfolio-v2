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
    const numPlayerCards = useSelector((state: RootState) => state.player.cards.length);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const topOfPlayer = useSelector((state: RootState) => playerCards[state.player.cards.length-1]);
    const playerScore = useSelector((state: RootState) => state.player.score);
    const isPlayerBust = useSelector((state: RootState) => state.player.isBust);
    const isDealerBust = useSelector((state: RootState) => state.dealer.isBust);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => deckCards[state.deck.cards.length-1]);
    const dispatch = useDispatch();

    const handleHit = (card: number): void => {
        dispatch(addToPlayer(topOfDeck));
        dispatch(removeFromDeck(topOfDeck));
    }
    const handleStay = (): void => {
        /*
        let score = 0;
        for (let i = 0; i < playerCards.length; i++) {
            //console.log(cards[playerCards[i]].val);
            score += cards[playerCards[i]].val;
        }
         */
        if (!isDealerBust) {
            dispatch(addToDealer(topOfDeck));
            dispatch(removeFromDeck(topOfDeck));
        }
        // check sum of dealer hand
        // determine winner
    }
    const handleSingle = (card: number): void => {
            dispatch(addToDiscard(card));
            dispatch(removeFromPlayer(card));
    }
    useEffect(() => {
        console.log(numPlayerCards);
    }, [numPlayerCards]);

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
                    <button disabled={isPlayerBust} onClick={() => handleHit(topOfDeck)}>
                        Hit
                    </button>
                    <button onClick={() => handleStay()}>
                        Stay
                    </button>
                </div>
            </div>
        </>
    );
}

export default Player;