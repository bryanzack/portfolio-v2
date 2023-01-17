"use strict";
exports.__esModule = true;
var React = require('react');
require("./League.css");
var web_1 = require("@react-spring/web");
var react_redux_1 = require("react-redux");
var SearchBar_1 = require("./SearchBar");
var Matches_1 = require("./Matches");
var League = function () {
    var has_submitted = (0, react_redux_1.useSelector)(function (state) { return state.league.has_submitted; });
    var search_params = (0, react_redux_1.useSelector)(function (state) { return state.league.search_params; });
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(web_1.animated.div, { style: style, className: "league" },
        React.createElement(SearchBar_1["default"], null),
        has_submitted && React.createElement(Matches_1["default"], null))); });
};
exports["default"] = League;
