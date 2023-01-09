const React = require('react');
import './ButtonNav.css';

import type { AppDispatch, RootState } from '../../store';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectCards, testThunk } from "../reducers/deckSlice.js";
import { FC, ReactElement } from 'react';
import { addToPlayer } from '../reducers/playerSlice.js';
import { addToDeck, removeFromDeck } from '../reducers/deckSlice.js';
import { addToDealer } from '../reducers/dealerSlice.js';
import { removeFromDiscard } from '../reducers/discardSlice.js';
import { determineWinner, toggleRepopulating } from '../reducers/gameSlice.js';
import { useDispatch, useSelector } from "react-redux";
import {AnyAction, createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import card from "../helpers/cards";

let ButtonNav: FC = (): ReactElement => {
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const deckCards = useSelector((state: RootState) => state.deck.cards);
    const discardCards = useSelector((state: RootState) => state.discard.cards);
    const playerCards = useSelector((state: RootState) => state.player.cards);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
    const playerScore = useSelector((state: RootState) => state.player.score);
    const winner = useSelector((state: RootState) => state.game.didSomeoneWin);
    const isDeckRepopulating = useSelector((state: RootState) => state.game.repopulating);
    const dispatch = useAppDispatch();

    // if player hits and deck is not empty, hit as normal
    // else if deck is empty, repopulate deck with discard, and deal from top of new deck state
    const hitPlayerThunk = () => (dispatch: any, getState: any): void => {
        const originalState = selectCards(getState());
        if (originalState.length !== 0) {
            if (card[originalState[originalState.length-1]].val + playerScore > 21) {
                dispatch(determineWinner("dealer"));
            }
            dispatch(addToPlayer(originalState[originalState.length-1]));
            dispatch(removeFromDeck(originalState[originalState.length-1]));
        } else {
            dispatch(toggleRepopulating(true));
            discardCards.forEach((card: number) => {
                dispatch(removeFromDiscard(card));
                dispatch(addToDeck(card));
            });
            const newState = selectCards(getState());
            setTimeout(() => {
                if (card[newState[newState.length-1]].val + playerScore > 21) {
                    dispatch(determineWinner("dealer"));
                }
                dispatch(addToPlayer(newState[newState.length-1]));
                dispatch(removeFromDeck(newState[newState.length-1]));
            }, 500);
            dispatch(toggleRepopulating(false));
        }
    }
    const newHandleStayThunk = () => (dispatch: any, getState: any): void => {
        // given current deck state, how many cards can be dealt to the dealer
        // before dealer busts or reaches dealerScore > = 17?
        const originalDeck = selectCards(getState());
        let tmpDealerScore = dealerScore;
        let count = 0;
        if (originalDeck.length >= 7) {
            while (tmpDealerScore < 17) {
                tmpDealerScore += card[originalDeck[originalDeck.length - 1 - count]].val;
                dispatch(addToDealer(originalDeck[originalDeck.length - 1 - count]));
                dispatch(removeFromDeck(originalDeck[originalDeck.length - 1 - count]));
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
            console.log("not enough cards for stay operation...");
            dispatch(toggleRepopulating(true));
            discardCards.forEach((card: number) => {
                dispatch(removeFromDiscard(card));
                dispatch(addToDeck(card));
            });
            const newDeck = selectCards(getState());
            setTimeout(() => {
                while (tmpDealerScore < 17) {
                    tmpDealerScore += card[newDeck[newDeck.length - 1 - count]].val;
                    dispatch(addToDealer(newDeck[newDeck.length - 1 - count]));
                    dispatch(removeFromDeck(newDeck[newDeck.length - 1 - count]));
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
            }, 500);
            dispatch(toggleRepopulating(false));
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
    const dealHandsThunk = () => (dispatch: any, getState: any) => {
        const originalDeck = selectCards(getState());
        if (originalDeck.length > 2) {
            dealDealer(deckCards[deckCards.length-1]);
            dealPlayer(deckCards[deckCards.length-2]);
            dealPlayer(deckCards[deckCards.length-3]);
        } else {
            dispatch(toggleRepopulating(true));
            discardCards.forEach((card: number) => {
                dispatch(removeFromDiscard(card));
                dispatch(addToDeck(card));
            });
            const newDeck = selectCards(getState());
            setTimeout(() => {
                dealDealer(newDeck[newDeck.length-1]);
                dealPlayer(newDeck[newDeck.length-2]);
                dealPlayer(newDeck[newDeck.length-3]);
            }, 500);
            dispatch(toggleRepopulating(false));
        }
    }

    return (
        <>
            <div className="button-container">
                totalNumCards: {deckCards.length + discardCards.length + playerCards.length + dealerCards.length}
                <div className="play-button">
                    {playerCards.length === 0 &&
                        <button disabled={isDeckRepopulating} onClick={() => dispatch(dealHandsThunk() as any)}>
                            Play
                        </button>
                    }
                </div>
                <div className={(playerScore > 0) ? "deal-buttons-active" : "deal-buttons-empty"}>
                    <button onClick={() => dispatch(hitPlayerThunk() as any)} disabled={winner}>
                        Hit
                    </button>
                    <button onClick={() => dispatch(newHandleStayThunk() as any)} disabled={winner}>
                        Stay
                    </button>
                </div>
            </div>
        </>
    );
}

export default ButtonNav;