import { createSlice } from '@reduxjs/toolkit';

export interface CardState {
    isFaceUp: boolean,
}

const initialState: CardState = {
    isFaceUp: false,
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        flip: (state) => {
            state.isFaceUp = !state.isFaceUp;
        },
    },
});

export const { flip } = cardSlice.actions;
export default cardSlice.reducer;