/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlayerState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
    cards: number[],
}
const initialState: PlayerState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
}
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addToPlayer: (state, action:PayloadAction<number>) => {
            if (state.numCards === 0) {
                state.isEmpty = false;
                state.cards.push(action.payload);
                state.numCards++;
            } else if (state.numCards === 1) {
                state.isEmpty = false;
                state.isFull = false;
                state.cards.push(action.payload);
                state.numCards++;
            } else if (state.numCards === 2) {
                state.isFull = true;
            }

        },
        removeFromPlayer: (state, action:PayloadAction<number>) => {
            if (state.numCards === 0) {
                state.isEmpty = true;
            } else if (state.numCards === 1) {
                state.cards.pop();
                state.isEmpty = true;
                state.isFull = false;
            } else if (state.numCards === 2) {
                state.cards.pop();
                state.isFull = true;
            }
        },
    },
});

export const { addToPlayer, removeFromPlayer } = playerSlice.actions;
export default playerSlice.reducer;