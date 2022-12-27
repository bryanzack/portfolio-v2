const React = require('react');
import './Deck.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { removeFromDeck } from '../store/deckSlice';
import { addToDiscard } from '../store/discardSlice';
import { useTransition, animated } from 'react-spring';
import cards from './cards.js';

import Card from './Card.js';

const Deck: FC = (props): ReactElement => {

    const isDeckFull = useSelector((state: RootState) => state.deck.isFull);
    const isDeckEmpty = useSelector((state: RootState) => state.deck.isEmpty);
    const numDeckCards = useSelector((state: RootState) => state.deck.numCards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => state.deck.cards[state.deck.cards.length-1]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (numDeckCards > 0)
            console.log("lastOfDeckVal: " + cards[deckCards[deckCards.length-1]].data);
        else
            console.log("empty deck");
    }, [deckCards]);

    const handleClick = () => {
        dispatch(addToDiscard(topOfDeck)) && dispatch(removeFromDeck(topOfDeck));
    }

    return (
        <>
            <div className="deck">
                <h1>numCards: {numDeckCards}</h1>
                <div className="deck-buttons">
                    <button onClick={() => handleClick()}>
                        Discard top of deck card
                    </button>
                    <span>{isDeckFull ? "full" : ""}</span>
                    <span>{isDeckEmpty ? "empty" : ""}</span>
                </div>
                <div className="cards">
                    {deckCards.map((index) => (
                        <div key={index} className={(index === deckCards[deckCards.length-1]) ? 'top-card-deck' : 'card'}>
                            <Card pile={"deck"} isTopCard={index === deckCards[deckCards.length-1]} key={index} id={index}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Deck;
