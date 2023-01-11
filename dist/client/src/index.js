"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./index.css");
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const App_1 = __importDefault(require("./App"));
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<react_redux_1.Provider store={store_1.store}>
          <App_1.default />
      </react_redux_1.Provider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
