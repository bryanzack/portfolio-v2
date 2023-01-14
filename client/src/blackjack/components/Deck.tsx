const React = require('react');
import './Deck.css';

import type { RootState } from '../../store';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addToDeck, removeFromDeck, shuffle } from '../reducers/deckSlice';
import { addToPlayer } from '../reducers/playerSlice';
import { removeFromDiscard } from "../reducers/discardSlice";

import Card from './Card.js';

const Deck: FC = (props): ReactElement => {
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const debug_mode = useSelector((state: RootState) => state.game.debug);
    const dispatch = useDispatch();

    const handleShuffle = (): void => {
        dispatch(shuffle());
    }
    useEffect(() => {
        handleShuffle();
    }, []);

    return (
        <>
            <div className="deck">
                {debug_mode && deckCards.length}
                <div className="cards">
                    {deckCards.map((index: number) => (
                        <Card pile={"deck"}
                              key={index}
                              id={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Deck;
