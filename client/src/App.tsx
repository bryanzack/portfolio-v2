import React, {FC} from 'react';

import Home from './components/Home.js';
import Blackjack from './components/Blackjack.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

const App: FC = () => {
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