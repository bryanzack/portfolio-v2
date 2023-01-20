/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import cards from '../helpers/cards';

export interface DealerState {
    numCards: number,
    cards: number[],
    score: number,
    isBust: boolean,
}

const initialState: DealerState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false,
}


export const dealerSlice = createSlice({
    name: 'dealer',
    initialState,
    reducers: {
        addToDealer: (state, action: PayloadAction<number>) => {
            state.cards.push(action.payload);
            state.score += cards[action.payload].val;
        },
        removeFromDealer: (state, action: PayloadAction<number>) => {
            if (state.cards.length !== 0) {
                state.score -= cards[action.payload].val;
                state.cards.pop();
            }
        },
        bustDealer: (state) => {
            state.isBust = !state.isBust;
        },
    },
});

export const { addToDealer, removeFromDealer, bustDealer } = dealerSlice.actions;
export default dealerSlice.reducer;