"use strict";
exports.__esModule = true;
var React = require('react');
require("./index.css");
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var App_1 = require("./App");
var root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(App_1["default"], null)));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
