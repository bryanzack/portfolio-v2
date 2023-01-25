const React = require('react');
import './Blackjack.css';

import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { animated, useTransition } from '@react-spring/web';
import type { RootState } from '../../../store';

import Deck from './Deck.js';
import Discard from './Discard.js';
import Player from './Player.js';
import Dealer from './Dealer.js';
import ButtonNav from './ButtonNav.js';
import Popup from './Popup.js';
import HelpTab from "./HelpTab";

const Blackjack: FC = (): ReactElement => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const fadeIn = useTransition(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return fadeIn((style) => (
        <>
            <animated.div style={style} className="blackjack">
                <HelpTab />
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
            </animated.div>
        </>
    ));
}

export default Blackjack;