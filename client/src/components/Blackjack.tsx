const React = require('react');
import './Blackjack.css';
import { FC } from 'react';

import Deck from './Deck.js';
import Discard from './Discard.js'
import Player from './Player.js';

const Blackjack: FC = () => {

    return (
        <div className="blackjack">
            <div className="top">
                <div className="top-container">
                    <Discard />
                    <Deck />
                </div>
            </div>
            <div className="bot">
                <div className="bot-container">
                    <Player />
                </div>
            </div>
        </div>
    );
}
export default Blackjack;