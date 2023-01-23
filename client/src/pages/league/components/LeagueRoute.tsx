const React = require('react');
import './LeagueRoute.css';

import type { RootState } from "../../../store";
import { updateUserInput } from "../reducers/searchBarSlice";
import { useParams } from "react-router";
import { animated, useTransition } from '@react-spring/web';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';
import Matches from './Matches';


const LeagueRoute = (): JSX.Element => {
    const dispatch = useDispatch();
    const { region, name } = useParams();
    dispatch((updateUserInput(name!)));
    const fadeIn = useTransition(null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });
    return fadeIn((style) => (
        <animated.div style={style} className="league">
            <div className="league-container">
                <SearchBar/>
                {(region && name) && <Matches args={{region: region, name: name}} />}
            </div>
        </animated.div>
    ));
}

export default LeagueRoute;