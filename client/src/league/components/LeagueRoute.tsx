const React = require('react');
import './LeagueRoute.css';

import type { SummonerQueryArgs } from "../../store/api";
import type { RootState } from "../../store";
import { useParams } from "react-router";
import { useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParams } from "../reducers/leagueSlice";
import SearchBar from './SearchBar';
import Matches from './Matches';


const LeagueRoute = (): JSX.Element => {
    const search_params = useSelector((state: RootState) => state.league.search_params);
    const fadeIn = useTransition(null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });
    return fadeIn((style) => (
        <animated.div style={style} className="league">
            <div className="league-container">
                <SearchBar/>
                <Matches args={{region: search_params.selected_region, name: search_params.user_input}}/>
            </div>
        </animated.div>
    ));
}

export default LeagueRoute;