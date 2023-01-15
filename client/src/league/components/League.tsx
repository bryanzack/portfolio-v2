const React = require('react');
import './League.css';

import { FC, ReactElement } from 'react';
import { animated, useTransition } from '@react-spring/web';
import SearchBar from './SearchBar';

const League: FC = (): ReactElement => {
   const fadeIn = useTransition(null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
   });
   return fadeIn((style) => (
       <animated.div style={style} className="league">
            <SearchBar />
       </animated.div>
   ));
}

export default League;