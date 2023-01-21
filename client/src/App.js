"use strict";
exports.__esModule = true;
var React = require('react');
require("./App.css");
var Blackjack_1 = require("./pages/blackjack/components/Blackjack");
var Landing_1 = require("./pages/landing/components/Landing");
var LeagueHome_1 = require("./pages/league/components/LeagueHome");
var LeagueRoute_1 = require("./pages/league/components/LeagueRoute");
var react_router_dom_1 = require("react-router-dom");
var App = function () {
    return (React.createElement("div", { className: "app" },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Landing_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/blackjack', element: React.createElement(Blackjack_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/league', element: React.createElement(LeagueHome_1["default"], null) })
            //TODO `figure out way to pass query params to rtk query while still preserving caching behavior
            ,
                "//TODO `figure out way to pass query params to rtk query while still preserving caching behavior",
                React.createElement(react_router_dom_1.Route, { path: '/league/:region/:name', element: React.createElement(LeagueRoute_1["default"], null) })))));
};
exports["default"] = App;
