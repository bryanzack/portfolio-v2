/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
    didSomeoneWin: boolean,
    winner?: string,
}

const initialState: GameState = {
    didSomeoneWin: false,
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        determineWinner: (state, action: PayloadAction<string>) => {
            state.didSomeoneWin = true;
            state.winner = action.payload;
        },
    },
});

export const { determineWinner } = gameSlice.actions;
export default gameSlice.reducer;