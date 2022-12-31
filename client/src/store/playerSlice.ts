/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlayerState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
    cards: number[],
    score: number,
}
const initialState: PlayerState = {
    numCards: 0,
    isEmpty: true,
    isFull: false,
    cards: [],
    score: 0,
}
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addToPlayer: (state, action:PayloadAction<number>) => {
            if (state.numCards === 0) {
                state.cards.push(action.payload);
                state.numCards++;
                state.isEmpty = false;
            } else if (state.numCards === 1) {
                state.cards.push(action.payload);
                state.numCards++;
                state.isFull = true;
            } else if (state.numCards === 2) {
            }
        },
        removeFromPlayer: (state, action:PayloadAction<number>) => {
            if (state.numCards === 0) {
            } else if (state.numCards === 1) {
                state.cards.pop();
                state.numCards--;
                state.isEmpty = true;
            } else if (state.numCards === 2) {
                state.cards.pop();
                state.numCards--;
                state.isFull = false;
            }
        },
    },
});

export const { addToPlayer, removeFromPlayer } = playerSlice.actions;
export default playerSlice.reducer;