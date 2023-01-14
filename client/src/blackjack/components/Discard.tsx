import {debug} from "util";

const React = require('react');
import './Discard.css';

import type { RootState } from '../../store';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.js';

const Discard: FC = (): ReactElement => {
    const  discardCards = useSelector((state: RootState) => state.discard.cards);
    const debug_mode = useSelector((state: RootState) => state.game.debug);
    return (
        <>
            <div className="discard">
                {debug_mode && `${discardCards.length}`}
                <div className="cards">
                    {discardCards.map((index: number) => (
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