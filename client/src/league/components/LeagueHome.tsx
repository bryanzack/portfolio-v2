const React = require('react');
import './LeagueHome.css';

import type { RootState } from '../../store';
import { animated, useTransition } from '@react-spring/web';
import SearchBar from './SearchBar';

const LeagueHome = (): JSX.Element => {
   return (
       <>
          <SearchBar />
          <h1>HOME!</h1>
       </>
   );
}

export default LeagueHome;
