const React = require('react');
import { FC, ReactElement } from 'react';
import './App.css';

import Blackjack from './blackjack/components/Blackjack.js';
import Landing from './landing/components/Landing.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './blackjack/components/Home.js';

const App: FC = (): ReactElement => {
  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='/blackjack' element={<Blackjack />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;