/* eslint-disable */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { removeFromDiscard } from "./discardSlice";
import cards from "../components/cards";

let fullDeck = (): number[] => {
    let deck: number[] = [];
    for (let i = 1; i <= 52; i++)
        deck.push(i);
    return deck;
}

export interface DeckState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
    cards: number[],
    topCard: number,
}

const initialState: DeckState = {
    numCards: 52,
    isEmpty: false,
    isFull: true,
    cards: fullDeck(),
    topCard: 1,
}

export const testThunk =
    (discardCards: number[]): AppThunk =>
        (dispatch, getState) => {
        discardCards.forEach((card: number) => {
            dispatch(removeFromDiscard(card));
            dispatch(addToDeck(card));
        });
        /*
        const currVal = selectCards(getState());
        console.log(currVal);
        dispatch(removeFromDeck(currVal.length-1));
        const newVal = selectCards(getState());
        console.log(newVal);
         */
    }

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        shuffle: (state, action: PayloadAction<void>) => {
            for (let i = state.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = state.cards[i];
                state.cards[i] = state.cards[j];
                state.cards[j] = tmp;
            }
        },
        addToDeck: (state, action: PayloadAction<number>) => {
            if (!state.cards.includes(action.payload)) {
                if (state.numCards < 51) {
                    state.isEmpty = false;
                } else if (state.numCards === 51) {
                    state.isFull = true;
                } else if (state.numCards === 0) {
                    state.isEmpty = false;
                }
                state.numCards++;
                state.cards.push(action.payload);
            } else {
                console.log("failed to add to deck: " + cards[action.payload].name + " of " + cards[action.payload].suite + " (" + action.payload + ")");
            }
        },
        removeFromDeck: (state, action: PayloadAction<number>) => {
            if (state.numCards > 1 && state.numCards) {
                state.isFull = false;
            } else if (state.numCards === 1) {
                state.isEmpty = true;
            } else if (state.numCards === 51) {
                state.isFull = false;
            }
            state.numCards--;
            state.cards.pop();
        },
    },
});

export const { shuffle, addToDeck, removeFromDeck } = deckSlice.actions;
export const selectCards = (state: RootState) => state.deck.cards;
export default deckSlice.reducer;
