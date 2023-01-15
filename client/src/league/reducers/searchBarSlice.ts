/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBarState {
    regions: string[],
    selected_region: string,
    user_input: string,
}

const initialState: SearchBarState = {
    regions: ['br1', 'eun1', 'euw1', 'la1',
        'la2', 'na1', 'oc1', 'ru',
        'tr1', 'jp1', 'kr', 'ph2',
        'sg2', 'tw2', 'th2', 'vn2'],
    selected_region: "na1",
    user_input: "",
}

export const searchBarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        updateUserInput: (state, action: PayloadAction<string>) => {
            state.user_input = action.payload;
        },
        updateSelectedRegion: (state, action:PayloadAction<string>) => {
            if (state.regions.includes(action.payload)) {
                state.selected_region = action.payload.toLowerCase();
            } else {
                console.log(`Error: ${action.payload} is not a valid region`);
            }
        },
    },
});

export const { updateUserInput, updateSelectedRegion } = searchBarSlice.actions;
export default searchBarSlice.reducer;