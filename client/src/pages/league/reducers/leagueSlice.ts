/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type SearchParams = {
    selected_region: string,
    user_input: string,
}
interface LeagueState {
    search_params: SearchParams,
    show_history: boolean,
}

const initialState: LeagueState = {
    search_params: {
        selected_region: "",
        user_input: "",
    },
    show_history: false,
}

export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setSearchParams: (state, action: PayloadAction<SearchParams>) => {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
        },
        setShowHistory: (state, action: PayloadAction<boolean>) => {
            state.show_history = action.payload;
        }
    },
});

export const { setShowHistory, setSearchParams } = leagueSlice.actions;
export default leagueSlice.reducer;