const React = require('react');
import { FC, ReactElement } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import Blackjack from './components/Blackjack.js';

const App: FC = (): ReactElement => {
  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/blackjack' element={<Blackjack />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;