const React = require('react');
import './Discard.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDeck } from '../store/deckSlice';
import { removeFromDiscard } from '../store/discardSlice';
import cards from './cards.js';
import Card from './Card.js';

const Discard: FC = (props): ReactElement => {
    const isDiscardFull = useSelector((state: RootState) => state.discard.isFull);
    const isDiscardEmpty = useSelector((state: RootState) => state.discard.isEmpty);
    const numDiscardCards = useSelector((state: RootState) => state.discard.numCards);
    const  discardCards = useSelector((state: RootState) => state.discard.cards);
    const topOfDiscard = useSelector((state: RootState) => state.discard.cards[state.discard.cards.length-1]);
    const dispatch = useDispatch();

    const handleSingle = (topOfDiscard: number) => {
        dispatch(addToDeck(topOfDiscard));
        dispatch(removeFromDiscard(topOfDiscard));
    }

    const handleAll = () => {
        let tmp = 0;
        for (let i = topOfDiscard; i > 0; i-- && tmp++) {
            handleSingle(topOfDiscard-tmp);
        }
    }

    return (
        <>
            <div className="discard">
                <h1>numCards: {numDiscardCards}</h1>
                <div className="discard-buttons">
                    <button onClick={() => handleSingle(topOfDiscard)}>
                        Reclaim top of discard
                    </button>
                    <span>{isDiscardFull ? "full" : ""}</span>
                    <span>{isDiscardEmpty ? "empty" : ""}</span>
                </div>
                <div className="cards">
                    {discardCards.map((index) => (
                        <Card pile={"discard"}
                              isTopCard={index ===discardCards[discardCards.length-1]}
                              key={index}
                              id={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Discard;