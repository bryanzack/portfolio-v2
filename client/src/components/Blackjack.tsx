const React = require('react');
import './Blackjack.css';
import { FC, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
import type { RootState } from '../store';

import Deck from './Deck.js';
import Discard from './Discard.js';
import Player from './Player.js';
import Dealer from './Dealer.js';
import ButtonNav from './ButtonNav.js';

const Blackjack: FC = (): ReactElement => {
    const playerScore = useSelector((state: RootState) => state.player.score);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
    const winner = useSelector((state: RootState) => state.game.winner);
    const animatePopup = useSpring({
        from: {
            x: "-100%vw",
        },
        to: {
            x: "0vw",
        },
        config: {
            duration: 1000,
        }
    });
    return (
        <div className="blackjack">
            <div className="top">
                <div className="top-container">
                    <Discard />
                    <Dealer />
                    <Deck />
                </div>
            </div>
            <animated.div style={animatePopup} className="status">
                <p>{winner}</p>
            </animated.div>
            <div className="bot">
                <div className="bot-container">
                    <Player />
                    <ButtonNav />
                </div>
            </div>
        </div>
    );
}

export default Blackjack;