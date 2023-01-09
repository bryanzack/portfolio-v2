import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CardState {
    theme: string,
}

const initialState: CardState = {
    theme: "blue",
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        }
    },
});

export const { changeTheme } = cardSlice.actions;
export default cardSlice.reducer;