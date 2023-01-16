import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deckReducer from '../blackjack/reducers/deckSlice';
import cardReducer from '../blackjack/reducers/cardSlice';
import discardReducer from '../blackjack/reducers/discardSlice';
import playerReducer from '../blackjack/reducers/playerSlice';
import dealerReducer from '../blackjack/reducers/dealerSlice';
import gameReducer from '../blackjack/reducers/gameSlice';
import navReducer from '../landing/reducers/navSlice';
import searchBarReducer from '../league/reducers/searchBarSlice';
import leagueReducer from '../league/reducers/leagueSlice';
import { api } from './api';
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";


export const store: ToolkitStore = configureStore({
    reducer: {
        deck: deckReducer,
        card: cardReducer,
        discard: discardReducer,
        player: playerReducer,
        dealer: dealerReducer,
        game: gameReducer,
        nav: navReducer,
        searchbar: searchBarReducer,
        league: leagueReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>