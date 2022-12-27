import { createSlice } from '@reduxjs/toolkit';

export interface CardState {
    isFaceUp: boolean,
    isTopCard: boolean,
}

const initialState: CardState = {
    isFaceUp: false,
    isTopCard: false,
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