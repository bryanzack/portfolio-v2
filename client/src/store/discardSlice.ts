/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DiscardState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
    cards: number[],
}

const initialState: DiscardState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
}

const discardSlice = createSlice({
    name: 'discard',
    initialState,
    reducers: {
        addToDiscard: (state, action: PayloadAction<number>) => {
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
                console.log("addToDiscard: ", action.payload);
            } else {
                console.log("failed to add to discard: ", action.payload);
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
            } else {
                console.log("frog: discard");
            }
        },
    },
});

export const { addToDiscard, removeFromDiscard } = discardSlice.actions;
export default discardSlice.reducer;