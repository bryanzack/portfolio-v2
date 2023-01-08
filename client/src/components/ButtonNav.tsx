const React = require('react');
import './ButtonNav.css';

import type { RootState } from '../store';
import { FC, ReactElement } from 'react';
import { addToPlayer } from '../store/playerSlice.js';
import { addToDeck, removeFromDeck } from '../store/deckSlice.js';
import { addToDealer } from '../store/dealerSlice.js';
import { removeFromDiscard } from '../store/discardSlice.js';
import { determineWinner } from '../store/gameSlice.js';
import { useDispatch, useSelector } from "react-redux";
import card from "./cards";

let ButtonNav: FC = (): ReactElement => {
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const discardCards = useSelector((state: RootState) => state.discard.cards);
    const topOfDeck = useSelector((state: RootState) => deckCards[state.deck.cards.length-1]);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
    const playerScore = useSelector((state: RootState) => state.player.score);
    const winner = useSelector((state: RootState) => state.game.didSomeoneWin);
    const dispatch = useDispatch();

    const repopulateDeck = () => {
        discardCards.forEach((card) => {
            dispatch(addToDeck(card));
            dispatch(removeFromDiscard(card));
        });
    }

    const hitPlayer = () => {
        if (deckCards.length !== 0) {
            if (card[deckCards.length - 1].val + playerScore > 21) {
                dispatch(determineWinner("dealer"));
            }
            dispatch(addToPlayer(deckCards[deckCards.length-1]));
            dispatch(removeFromDeck(deckCards[deckCards.length-1]));
        } else {
            console.log("NOT ENOUGH CARDS FOR hitPlayer()...");
            repopulateDeck();
        }
    }
    const handleStay = () => {
        if (deckCards.length !== 0) {
            let tmpDealerScore = dealerScore;
            let count = 0;
            while (tmpDealerScore < 17) {
                tmpDealerScore += card[deckCards[deckCards.length - 1 - count]].val;
                console.log("adding to dealer: ", deckCards[deckCards.length - 1 - count]);
                dispatch(addToDealer(deckCards[deckCards.length - 1 - count]));
                dispatch(removeFromDeck(deckCards[deckCards.length - 1 - count]));
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
        } else {
            console.log("NOT ENOUGH CARDS FOR handleStay()...");
            repopulateDeck();
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
        // why is topOfDeck undefined sometimes?
        if (deckCards.length > 2) {
            dealDealer(deckCards[deckCards.length-1]);
            dealPlayer(deckCards[deckCards.length-2]);
            dealPlayer(deckCards[deckCards.length-3]);
        } else {
            console.log("NOT ENOUGH CARDS TO FOR dealHands()...");
            repopulateDeck();
        }
    }

    return (
        <>
            <div className="button-container">
                totalNumCards: {deckCards.length + discardCards.length + playerCards.length + dealerCards.length}
                <div className="play-button">
                    {playerCards.length === 0 &&
                        <button disabled={playerCards.length !== 0} onClick={() => (dealHands())}>
                            Play
                        </button>
                    }
                </div>
                <div className={playerScore > 0 ? "deal-buttons-active" : "deal-buttons-empty"}>
                    <button onClick={() => hitPlayer()} disabled={winner}>
                        Hit
                    </button>
                    <button onClick={() => handleStay()} disabled={winner}>
                        Stay
                    </button>
                </div>
            </div>
        </>
    );
}

export default ButtonNav;