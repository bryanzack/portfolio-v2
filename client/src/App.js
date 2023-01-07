"use strict";
exports.__esModule = true;
var React = require('react');
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_js_1 = require("./components/Home.js");
var Blackjack_js_1 = require("./components/Blackjack.js");
var App = function () {
    return (React.createElement("div", { className: "app" },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Home_js_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/blackjack', element: React.createElement(Blackjack_js_1["default"], null) })))));
};
exports["default"] = App;
