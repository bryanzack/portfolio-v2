const React = require('react');
import './App.css';

import Blackjack from './blackjack/components/Blackjack';
import Landing from './landing/components/Landing';
import LeagueHome from './league/components/LeagueHome';
import LeagueRoute from './league/components/LeagueRoute';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/blackjack' element={<Blackjack />} />
                  <Route path='/league' element={<LeagueHome />} />

                  //TODO `figure out way to pass query params to rtk query while still preserving caching behavior
                  <Route path={'/league/:region/:id'} element={<LeagueRoute />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;