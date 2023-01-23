"use strict";
exports.__esModule = true;
var React = require('react');
require("./LeagueRoute.css");
var react_router_1 = require("react-router");
var web_1 = require("@react-spring/web");
var react_redux_1 = require("react-redux");
var SearchBar_1 = require("./SearchBar");
var Matches_1 = require("./Matches");
var LeagueRoute = function () {
    var search_params = (0, react_redux_1.useSelector)(function (state) { return state.league.search_params; });
    var _a = (0, react_router_1.useParams)(), region = _a.region, name = _a.name;
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(web_1.animated.div, { style: style, className: "league" },
        React.createElement("div", { className: "league-container" },
            React.createElement(SearchBar_1["default"], null),
            (region && name) && React.createElement(Matches_1["default"], { args: { region: region, name: name } })))); });
};
exports["default"] = LeagueRoute;