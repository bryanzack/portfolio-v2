const React = require('react');
import './Discard.css';

import type { RootState } from '../store';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.js';

const Discard: FC = (): ReactElement => {
    const  discardCards = useSelector((state: RootState) => state.discard.cards);
    return (
        <>
            <div className="discard">
                <div className="cards">
                    {discardCards.map((index) => (
                        <Card pile={"discard"}
                              key={index}
                              id={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Discard;