const React = require('react');
import './Blackjack.css';

import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Deck from './Deck.js';
import Discard from './Discard.js';
import Player from './Player.js';
import Dealer from './Dealer.js';
import ButtonNav from './ButtonNav.js';
import Popup from './Popup.js';

const Blackjack: FC = (): ReactElement => {
    const playerScore = useSelector((state: RootState) => state.player.score);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
    const winner = useSelector((state: RootState) => state.game.winner);

    return (
        <>
            <div className="popup">
                <Popup winner={winner}/>
            </div>
            <div className={winner ? "blackjack-blur" : "blackjack"}>
                <div className="top">
                    <div className="top-container">
                        <Discard />
                        <Dealer />
                        <Deck />
                    </div>
                </div>
                <div className="bot">
                    <div className="bot-container">
                        <Player />
                        <ButtonNav />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blackjack;