/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import cards from '../components/cards';
export interface PlayerState {
    numCards: number,
    cards: number[],
    score: number,
    isBust: boolean,
}
const initialState: PlayerState = {
    numCards: 0,
    cards: [],
    score: 0,
    isBust: false,
}
export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addToPlayer: (state, action:PayloadAction<number>) => {
            if (!state.cards.includes(action.payload)) {
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
        removeFromPlayer: (state, action:PayloadAction<number>) => {
            if (state.score < 22) state.isBust = false;
            if (state.cards.length !== 0) {
                state.score -= cards[action.payload].val;
                state.cards.pop();
            }
        },
    },
});

export const { addToPlayer, removeFromPlayer } = playerSlice.actions;
export default playerSlice.reducer;