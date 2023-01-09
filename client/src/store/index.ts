import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import deckReducer from '../store/deckSlice';
import cardReducer from '../store/cardSlice';
import discardReducer from '../store/discardSlice';
import playerReducer from '../store/playerSlice';
import dealerReducer from '../store/dealerSlice';
import gameReducer from '../store/gameSlice';
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { useDispatch } from "react-redux";


export const store: ToolkitStore = configureStore({
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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

