/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
    active_tab: string,
    visible_tabs: string[],
    tabs: string[],
}

const initialState: NavState = {
    active_tab: 'about',
    visible_tabs: ['about'],
    tabs: ['tech', 'projects', 'about'],
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        switchToTab: (state, action: PayloadAction<string>) => {
            state.active_tab = action.payload;
            state.visible_tabs = [action.payload];
            let tmpArr: string[] = [];
            state.tabs.forEach((tab) => {
                if (tab !== state.active_tab) tmpArr.push(tab);
            });
            state.tabs = [...tmpArr, action.payload];
        },
        toggleHover: (state, action: PayloadAction<string[]>) => {
            state.visible_tabs = action.payload;
        },
    },
});

export const { switchToTab, toggleHover } = navSlice.actions;
export default navSlice.reducer;
