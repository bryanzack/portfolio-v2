"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./App.css");
const Blackjack_js_1 = __importDefault(require("./blackjack/components/Blackjack.js"));
const Landing_js_1 = __importDefault(require("./landing/components/Landing.js"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (<div className="app">
          <react_router_dom_1.BrowserRouter>
              <react_router_dom_1.Routes>
                  <react_router_dom_1.Route path='/' element={<Landing_js_1.default />}/>
                  <react_router_dom_1.Route path='/blackjack' element={<Blackjack_js_1.default />}/>
              </react_router_dom_1.Routes>
          </react_router_dom_1.BrowserRouter>
      </div>);
};
exports.default = App;
