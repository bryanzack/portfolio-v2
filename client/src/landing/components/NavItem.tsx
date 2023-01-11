import handleNavHover from "../helpers/handleNavHover";

const React = require('react');
import './NavItem.css';

import {FC, ReactElement, useEffect, useState} from 'react';
import type { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { switchToTab, toggleHover } from "../reducers/navSlice";
import handleHover from "../helpers/handleNavHover";

interface NavItemProps {
    tab_name: string,
}

const NavItem: FC<NavItemProps> = ({ tab_name}): ReactElement => {
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const is_hover = useSelector((state: RootState) => state.nav.is_hover);
    const visible_tabs = useSelector((state: RootState) => state.nav.visible_tabs);
    const tabs = useSelector((state: RootState) => state.nav.tabs);
    const mouseEnter = () => {
        dispatch(toggleHover(handleHover(tabs, 'enter', tab_name)))
    }
    const mouseClick = (tab_name: string) => {
        console.log(tab_name);
        dispatch(switchToTab(tab_name));
    }
    const dispatch = useDispatch();
    return (
        <>
            <div className="contents" id={tab_name}>
                <h1 onMouseEnter={() => mouseEnter()}
                    onClick={() => mouseClick(tab_name)}>
                    {visible_tabs.includes(tab_name) ? tab_name : ""}
                </h1>
            </div>
        </>
    );
}

export default NavItem;

// <h1 onClick={() => tab_name === active_tab ? dispatch(switchToTab('')) : dispatch(switchToTab(tab_name))}>{tab_name === active_tab ? tab_name : tab_name[0]}</h1>
