/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
    didSomeoneWin: boolean,
    winner?: string | undefined,
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
        resetGame: (state, action: PayloadAction) => {
            state.didSomeoneWin = false;
            state.winner = undefined;
        },
    },
});

export const { resetGame, determineWinner } = gameSlice.actions;
export default gameSlice.reducer;