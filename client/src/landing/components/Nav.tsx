const React = require('react');
import './Nav.css';

import {FC, ReactElement, useEffect} from 'react';
import type { RootState } from "../../store";
import { animated, useSpring } from '@react-spring/web';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHover } from '../reducers/navSlice';
import handleHover from "../helpers/handleNavHover";
import NavItem from './NavItem';
import TabContent from './TabContent';

interface NavProps {

}
const Nav: FC<NavProps> = (): ReactElement => {
    //const activeTab = useSelector((state: RootState) => state.active_tab);
    /*
    const spring = useSpring({
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.test ? 1 : 0,
        x: props.test ? 0 : 20,
        height: props.test ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    */

    const tabs = useSelector((state: RootState) => state.nav.tabs);
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const dispatch = useDispatch();

    return (
        <>
            <animated.div className={"nav-contents"}>
                <div onMouseLeave={() => dispatch(toggleHover(handleHover(tabs, 'leave', active_tab)))} className="nav-fit">
                    {tabs.map((tab: string, index: number) => {
                        return <NavItem key={index} tab_name={tab} />
                    })}
                </div>
            </animated.div>
        </>
    );
}

export default Nav;
