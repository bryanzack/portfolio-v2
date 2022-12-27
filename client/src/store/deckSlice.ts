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
}

const initialState: DeckState = {
    numCards: 52,
    isEmpty: false,
    isFull: true,
    cards: fullDeck(),
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
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
            }
        },
        removeFromDeck: (state, action: PayloadAction<number>) => {
            if (state.numCards > 1) {
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

export const { addToDeck, removeFromDeck } = deckSlice.actions;
export default deckSlice.reducer;
