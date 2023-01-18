/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type SearchParams = {
    selected_region: string,
    user_input: string,
}
interface LeagueState {
    has_submitted: boolean,
    search_params: SearchParams,
}

const initialState: LeagueState = {
    has_submitted: false,
    search_params: {
        selected_region: "",
        user_input: "",
    }
}

export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setSubmitted: (state, action: PayloadAction<boolean>) => {
            state.has_submitted = action.payload;
        },
        setSearchParams: (state, action: PayloadAction<SearchParams>) => {
            state.search_params.selected_region = action.payload.selected_region;
            state.search_params.user_input = action.payload.user_input;
        }
    },
});

export const { setSubmitted, setSearchParams } = leagueSlice.actions;
export default leagueSlice.reducer;