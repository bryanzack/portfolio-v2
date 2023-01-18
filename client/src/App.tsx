const React = require('react');
import './App.css';

import Blackjack from './blackjack/components/Blackjack.js';
import Landing from './landing/components/Landing.js';
import League from './league/components/League.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/blackjack' element={<Blackjack />} />
                  <Route path='/league' element={<League />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;