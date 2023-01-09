const React = require('react');
import './Player.css';

import type { RootState } from '../store';
import {FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.js';

const Player: FC = (): ReactElement => {
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const playerScore = useSelector((state: RootState) => state.player.score);

    return (
        <>
            <div className="player">
                {playerScore}
                <div className="cards">
                    {playerCards.map((index: number) => (
                        <Card pile={"player"}
                            key={index}
                            id={index}
                            from={"player"}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Player;

/*

                <div className="player-buttons">
                    <button  disabled={numPlayerCards === 0} onClick={() => handleSingle(topOfPlayer)}>
                        Send to discard
                    </button>
                    <button disabled={isPlayerBust} onClick={() => handleHit(topOfDeck)}>
                        Hit
                    </button>
                    <button onClick={() => handleStay()}>
                        Stay
                    </button>
                </div>
 */