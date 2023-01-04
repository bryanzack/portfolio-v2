/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
            if (state.numCards < 51) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
            } else if (state.numCards === 51) {
                state.isFull = true;
                state.numCards++;
                state.cards.push(action.payload);
            } else if (state.numCards === 0) {
                state.isEmpty = false;
                state.numCards++;
                state.cards.push(action.payload);
            } else {
                console.log("frog: deck");
            }
        },
        removeFromDeck: (state, action: PayloadAction<number>) => {
            if (state.numCards > 1 && state.numCards) {
                state.isFull = false;
                state.numCards--;
                state.cards.pop();
            } else if (state.numCards === 1) {
                state.isEmpty = true;
                state.numCards--;
                state.cards.pop();
            } else if (state.numCards === 51) {
                state.isFull = false;
            }
        },
    },
});

export const { shuffle, addToDeck, removeFromDeck } = deckSlice.actions;
export default deckSlice.reducer;
