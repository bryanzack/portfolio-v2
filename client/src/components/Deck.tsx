const React = require('react');
import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addCard, removeCard } from '../store/deckSlice';
const Deck: FC = (props): ReactElement => {
    const numCards = useSelector((state: RootState) => state.deck.numCards);
    const dispatch = useDispatch();

    return (
        <>
            <div className="deck">
                <h1>numCards: {numCards}</h1>
                <div className="deckButtons">
                    <button onClick={() => dispatch(addCard())}>
                        increment
                    </button>
                    <button onClick={() => dispatch(removeCard())}>
                        decrement
                    </button>
                </div>
            </div>
        </>
    );
}

export default Deck;