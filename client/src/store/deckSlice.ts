/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface DeckState {
    numCards: number,
    isEmpty: boolean,
    isFull: boolean,
}

const initialState: DeckState = {
    numCards: 51,
    isEmpty: false,
    isFull: true,
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        addCard: (state) => {
            state.numCards++;
        },
        removeCard: (state) => {
            state.numCards--;
        },
    },
});

export const { addCard, removeCard } = deckSlice.actions;
export default deckSlice.reducer;
