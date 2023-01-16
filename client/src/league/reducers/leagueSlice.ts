/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeagueState {
    has_submitted: boolean,
}

const initialState: LeagueState = {
    has_submitted: false,
}

export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setSubmitted: (state, action: PayloadAction<boolean>) => {
            state.has_submitted = action.payload;
        },
    },
});

export const { setSubmitted } = leagueSlice.actions;
export default leagueSlice.reducer;