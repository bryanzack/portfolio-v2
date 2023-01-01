/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import cards from '../components/cards';

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
            if (!state.isBust) {
                if (state.score + cards[action.payload].val > 21) {
                    state.isBust = true;
                    state.cards.push(action.payload);
                    state.score += cards[action.payload].val;
                } else {
                    state.score += cards[action.payload].val;
                    state.cards.push(action.payload);
                }
            }
        },
        removeFromDealer: (state, action: PayloadAction<number>) => {
            if (state.score < 22) state.isBust = false;
            if (state.cards.length !== 0) {
                state.score -= cards[action.payload].val;
                state.cards.pop();
            }
        },
    },
});

export const { addToDealer, removeFromDealer } = dealerSlice.actions;
export default dealerSlice.reducer;