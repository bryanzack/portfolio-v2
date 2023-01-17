/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import searchBar from "../components/SearchBar";
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
            console.log("from leagueSlice");
            console.log(state.search_params.user_input);
            console.log(state.search_params.selected_region);
        }
    },
});

export const { setSubmitted, setSearchParams } = leagueSlice.actions;
export default leagueSlice.reducer;