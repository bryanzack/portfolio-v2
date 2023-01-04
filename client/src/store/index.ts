import { configureStore } from '@reduxjs/toolkit';
import deckReducer from '../store/deckSlice';
import cardReducer from '../store/cardSlice';
import discardReducer from '../store/discardSlice';
import playerReducer from '../store/playerSlice';
import dealerReducer from '../store/dealerSlice';
import gameReducer from '../store/gameSlice';

export const store = configureStore({
    reducer: {
        deck: deckReducer,
        card: cardReducer,
        discard: discardReducer,
        player: playerReducer,
        dealer: dealerReducer,
        game: gameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;