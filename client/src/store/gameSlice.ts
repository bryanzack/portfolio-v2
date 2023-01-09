/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
    didSomeoneWin: boolean,
    winner?: string | undefined,
    repopulating: boolean,
}

const initialState: GameState = {
    didSomeoneWin: false,
    repopulating: false,
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
        toggleRepopulating: (state, action: PayloadAction<boolean>) => {
            state.repopulating = action.payload;
        }
    },
});

export const { toggleRepopulating, resetGame, determineWinner } = gameSlice.actions;
export default gameSlice.reducer;