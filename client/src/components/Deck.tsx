const React = require('react');
import './Deck.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { removeFromDeck } from '../store/deckSlice';
import { addToDiscard } from '../store/discardSlice';

import Card from './Card.js';

const Deck: FC = (props): ReactElement => {

    const isDeckFull = useSelector((state: RootState) => state.deck.isFull);
    const isDeckEmpty = useSelector((state: RootState) => state.deck.isEmpty);
    const numDeckCards = useSelector((state: RootState) => state.deck.numCards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => state.deck.cards[state.deck.cards.length-1]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("deck: " + deckCards);
    }, [deckCards]);

    return (
        <>
            <div className="deck">
                <h1>numCards: {numDeckCards}</h1>
                <div className="deckButtons">
                    <button onClick={() => dispatch(addToDiscard(topOfDeck)) && dispatch(removeFromDeck(topOfDeck))}>
                        Discard top of deck card
                    </button>
                </div>
                <span>{isDeckFull ? "full" : ""}</span>
                <span>{isDeckEmpty ? "empty" : ""}</span>
            </div>
        </>
    );
}

export default Deck;