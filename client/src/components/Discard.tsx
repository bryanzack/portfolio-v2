const React = require('react');
import './Discard.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDeck } from '../store/deckSlice';
import { removeFromDiscard } from '../store/discardSlice';

import Card from './Card.js';

const Discard: FC = (props): ReactElement => {
    const isDiscardFull = useSelector((state: RootState) => state.discard.isFull);
    const isDiscardEmpty = useSelector((state: RootState) => state.discard.isEmpty);
    const numDiscardCards = useSelector((state: RootState) => state.discard.numCards);
    const  discardCards = useSelector((state: RootState) => state.discard.cards);
    const topOfDiscard = useSelector((state: RootState) => state.discard.cards[state.discard.cards.length-1]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("discard: " + discardCards);
    }, [discardCards]);

    return (
        <>
            <div className="discard">
                <h1>numCards: {numDiscardCards}</h1>
                <div className="discardButtons">
                    <button onClick={() => dispatch(addToDeck(topOfDiscard)) && dispatch(removeFromDiscard(topOfDiscard))}>
                        Reclaim top of discard
                    </button>
                    <span>{isDiscardFull ? "full" : ""}</span>
                    <span>{isDiscardEmpty ? "empty" : ""}</span>
                </div>
            </div>
        </>
    );
}

export default Discard;