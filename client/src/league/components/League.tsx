const React = require('react');
import './League.css';

import type { RootState } from "../../store";
import { animated, useTransition } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { setSubmitted } from '../reducers/leagueSlice';
import SearchBar from './SearchBar';
import Matches from './Matches';


const League = (): JSX.Element => {
    const has_submitted = useSelector((state: RootState) => state.league.has_submitted);
    const fadeIn = useTransition(null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return fadeIn((style) => (
       <animated.div style={style} className="league">
            <SearchBar />
           {has_submitted && <Matches />}
       </animated.div>
    ));
}

export default League;