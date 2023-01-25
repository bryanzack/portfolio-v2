"use strict";
exports.__esModule = true;
var React = require('react');
require("./LeagueHome.css");
var web_1 = require("@react-spring/web");
var SearchBar_1 = require("./SearchBar");
var LeagueHome = function () {
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(web_1.animated.div, { style: style, className: "league-home" },
        React.createElement("div", { className: "league-container" },
            React.createElement(SearchBar_1["default"], null)))); });
};
exports["default"] = LeagueHome;
