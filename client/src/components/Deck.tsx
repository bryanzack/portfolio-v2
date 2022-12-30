const React = require('react');
import './Deck.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { removeFromDeck } from '../store/deckSlice';
import { addToDiscard } from '../store/discardSlice';
import { addToPlayer } from '../store/playerSlice';
import { useTransition, animated } from 'react-spring';
import cards from './cards.js';

import Card from './Card.js';

const Deck: FC = (props): ReactElement => {
    const [test, setTest] = useState(false);
    const isDeckFull = useSelector((state: RootState) => state.deck.isFull);
    const isDeckEmpty = useSelector((state: RootState) => state.deck.isEmpty);
    const numDeckCards = useSelector((state: RootState) => state.deck.numCards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => deckCards[state.deck.cards.length-1]);
    const numPlayerCards = useSelector((state: RootState) => state.player.numCards);
    const dispatch = useDispatch();


    const handleSingle = (pile: string, topOfDeck: number): void => {
        if (pile == 'discard') {
            dispatch(addToDiscard(topOfDeck));
            dispatch(removeFromDeck(topOfDeck));
        } else if (pile == 'player') {
            dispatch(addToPlayer(topOfDeck));
            if (numPlayerCards < 3)
                dispatch(removeFromDeck(topOfDeck));
        }
    }

    const handleAll = (pile: string) => {
        let tmp = 0;
        for (let i = topOfDeck; i > 0; i-- && tmp++) {
            handleSingle(pile,topOfDeck-tmp);
        }
    }

    return (
        <>
            <div className="deck">
                <h1>numCards: {numDeckCards}</h1>
                <div className="deck-buttons">
                    <button onClick={() => handleSingle('discard', topOfDeck)}>
                        Send to discard
                    </button>
                    <button onClick ={() => handleSingle('player', topOfDeck)}>
                        Deal card
                    </button>
                    <button onClick={() => handleAll('discard')}>
                        Discard all
                    </button>
                    <span>{isDeckFull ? "full" : ""}</span>
                    <span>{isDeckEmpty ? "empty" : ""}</span>
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
