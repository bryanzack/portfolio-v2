const React = require('react');
import './ButtonNav.css';

import type { RootState } from '../store';
import { FC, ReactElement } from 'react';
import { addToPlayer } from '../store/playerSlice.js';
import { removeFromDeck } from '../store/deckSlice.js';
import { addToDealer } from '../store/dealerSlice.js';
import { determineWinner } from '../store/gameSlice';
import { useDispatch, useSelector } from "react-redux";
import card from "./cards";

let ButtonNav: FC = (): ReactElement => {
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const topOfDeck = useSelector((state: RootState) => deckCards[state.deck.cards.length-1]);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
    const playerScore = useSelector((state: RootState) => state.player.score);
    const dispatch = useDispatch();

    const hitPlayer = () => {
        if (card[topOfDeck].val + playerScore > 21) {
            dispatch(determineWinner("dealer"));
        }
        dispatch(addToPlayer(topOfDeck));
        dispatch(removeFromDeck(topOfDeck));
    }
    const handleStay = () => {
        let tmpDealerScore = dealerScore;
        let count = 0;
        while (tmpDealerScore < 17) {
            tmpDealerScore += card[deckCards[deckCards.length-1-count]].val;
            dispatch(addToDealer(deckCards[deckCards.length-1-count]));
            dispatch(removeFromDeck(deckCards[deckCards.length-1-count]));
            count++;
        }
        if (tmpDealerScore > 21) {
            dispatch(determineWinner('player'));
        } else if (tmpDealerScore <= 21 && tmpDealerScore > playerScore) {
            dispatch(determineWinner('dealer'));
        } else if (tmpDealerScore <= 21 && tmpDealerScore < playerScore) {
            dispatch(determineWinner('player'));
        } else if (tmpDealerScore === playerScore) {
            dispatch(determineWinner('push'));
        }
    }
    const dealDealer = (card: number) => {
        dispatch(addToDealer(card));
        dispatch(removeFromDeck(card));
    }
    const dealPlayer = (card: number) => {
        dispatch(addToPlayer(card));
        dispatch(removeFromDeck(card));
    }
    const dealHands = () => {
        dealDealer(deckCards[topOfDeck]);
        dealPlayer(deckCards[topOfDeck-1]);
        dealPlayer(deckCards[topOfDeck-2]);
    }

    return (
        <>
            <div className="button-container">
                {playerCards.length === 0 &&
                    <button disabled={playerCards.length !== 0} onClick={() => (dealHands())}>
                        Play
                    </button>
                }
                <button onClick={() => hitPlayer()} disabled={playerScore > 21}>
                    Hit
                </button>
                <button onClick={() => handleStay()} disabled={playerCards.length === 0}>
                Stay
                </button>
            </div>
        </>
    );
}

export default ButtonNav;