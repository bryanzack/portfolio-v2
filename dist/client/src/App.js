"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./App.css");
const Blackjack_1 = __importDefault(require("./pages/blackjack/components/Blackjack"));
const Landing_1 = __importDefault(require("./pages/landing/components/Landing"));
const LeagueHome_1 = __importDefault(require("./pages/league/components/LeagueHome"));
const LeagueRoute_1 = __importDefault(require("./pages/league/components/LeagueRoute"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (<div className="app">
          <react_router_dom_1.BrowserRouter>
              <react_router_dom_1.Routes>
                  <react_router_dom_1.Route path='/' element={<Landing_1.default />}/>
                  <react_router_dom_1.Route path='/blackjack' element={<Blackjack_1.default />}/>
                  <react_router_dom_1.Route path='/league' element={<LeagueHome_1.default />}/>

                  //TODO `figure out way to pass query params to rtk query while still preserving caching behavior
                  <react_router_dom_1.Route path={'/league/:region/:id'} element={<LeagueRoute_1.default />}/>
              </react_router_dom_1.Routes>
          </react_router_dom_1.BrowserRouter>
      </div>);
};
exports.default = App;
