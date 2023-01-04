const React = require('react');
import './Deck.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addToDeck, removeFromDeck, shuffle } from '../store/deckSlice';
import { addToPlayer } from '../store/playerSlice';
import { removeFromDiscard } from "../store/discardSlice";

import Card from './Card.js';

const Deck: FC = (props): ReactElement => {
    const isDeckFull = useSelector((state: RootState) => state.deck.isFull);
    const isDeckEmpty = useSelector((state: RootState) => state.deck.isEmpty);
    const numDeckCards = useSelector((state: RootState) => state.deck.numCards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => deckCards[state.deck.cards.length-1]);
    const isPlayerBust = useSelector((state: RootState) => state.player.isBust);
    const numDiscardCards = useSelector((state: RootState) => state.discard.numCards);
    const discardCards = useSelector((state: RootState) => state.discard.cards);
    const dispatch = useDispatch();

    const handleShuffle = (): void => {
        dispatch(shuffle());
    }
    const handleReclaimOne = (topOfDiscard: number): void => {
        dispatch(addToDeck(topOfDiscard));
        dispatch(removeFromDiscard(topOfDiscard));
    }
    useEffect(() => {
        handleShuffle();
    }, []);

    return (
        <>
            <div className="deck">
                <div className="deck-buttons">
                    <button onClick={() => handleShuffle()}>
                        Shuffle
                    </button>
                </div>
                <div className="cards">
                    {deckCards.map((index) => (
                        <Card pile={"deck"}
                              isTopCard={index === deckCards[deckCards.length-1]}
                              key={index}
                              id={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Deck;
