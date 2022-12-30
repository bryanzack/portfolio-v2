import { configureStore } from '@reduxjs/toolkit';
import deckReducer from '../store/deckSlice';
import cardReducer from '../store/cardSlice';
import discardReducer from '../store/discardSlice';
import playerReducer from '../store/playerSlice';

export const store = configureStore({
    reducer: {
        deck: deckReducer,
        card: cardReducer,
        discard: discardReducer,
        player: playerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;