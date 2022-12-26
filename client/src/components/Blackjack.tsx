const React = require('react');
import './Blackjack.css';

import Deck from './Deck.js';
import { FC } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Blackjack: FC = () => {

    return (
        <div className="blackjack">
            <div className="top">
                <Deck />
            </div>
        </div>
    );
}
export default Blackjack;
/*
<div className="blackjack">
    <button onClick={() => {
        setIsVisible(v => !v);
    }}>{isVisible ? 'un-mount' : 'mount'}</button>
    <div className="container">
        {transition((style, item) =>
            item ? <animated.div style={style} className="item" /> : ''
        )}
    </div>
</div>
 */