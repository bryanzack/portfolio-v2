/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DiscardState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
    cards: number[],
    topCard: number,
}

const initialState: DiscardState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
    topCard: 0,
}

const discardSlice = createSlice({
    name: 'discard',
    initialState,
    reducers: {
        addToDiscard: (state, action: PayloadAction<number>) => {
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
        removeFromDiscard: (state, action: PayloadAction<number>) => {
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

export const { addToDiscard, removeFromDiscard } = discardSlice.actions;
export default discardSlice.reducer;