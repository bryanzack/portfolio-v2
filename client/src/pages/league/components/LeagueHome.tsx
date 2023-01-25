const React = require('react');
import './LeagueHome.css';

import { animated, useTransition } from '@react-spring/web';
import SearchBar from './SearchBar';

const LeagueHome = (): JSX.Element => {
    const fadeIn = useTransition(null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });
   return fadeIn((style) => (
       <animated.div style={style} className={"league-home"}>
           <div className="league-container">
               <SearchBar />
           </div>
       </animated.div>
   ));
}

export default LeagueHome;
