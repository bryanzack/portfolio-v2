const React = require('react');
import './Blackjack.css';

import { FC } from 'react';
import Deck from './Deck.js';
import Discard from './Discard.js'

const Blackjack: FC = () => {

    return (
        <div className="blackjack">
            <div className="top">
                <div className="top-container">
                    <Discard />
                    <Deck />
                </div>
            </div>
        </div>
    );
}
export default Blackjack;