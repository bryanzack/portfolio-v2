const React = require('react');
import './App.css';

import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Blackjack from './pages/blackjack/components/Blackjack';
import Landing from './pages/landing/components/Landing';
import LeagueHome from './pages/league/components/LeagueHome';
import LeagueRoute from './pages/league/components/LeagueRoute';

const App = (): JSX.Element => {
    return (
        <div className="app">
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/blackjack' element={<Blackjack />} />
                  <Route path='/league' element={<LeagueHome />} />
                  //TODO `figure out way to pass query params to rtk query while still preserving caching behavior
                  <Route path={'/league/:region/:name'} element={<LeagueRoute />}/>
              </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;