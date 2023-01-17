const React = require('react');
import './League.css';

import type { RootState } from "../../store";
import { useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { setSubmitted } from '../reducers/leagueSlice';
import SearchBar from './SearchBar';
import Matches from './Matches';


const League = (): JSX.Element => {
    const has_submitted = useSelector((state: RootState) => state.league.has_submitted);
    const search_params = useSelector((state: RootState) => state.league.search_params);
    const fadeIn = useTransition(null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return fadeIn((style) => (
       <animated.div style={style} className="league">
            <SearchBar />
           {(search_params.selected_region !== ""
               && search_params.user_input !== "")
               && <Matches region={search_params.selected_region}
                           name={search_params.user_input}/>}
       </animated.div>
    ));
}

export default League;