"use strict";
exports.__esModule = true;
var React = require('react');
require("./League.css");
var web_1 = require("@react-spring/web");
var SearchBar_1 = require("./SearchBar");
var League = function () {
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(web_1.animated.div, { style: style, className: "league" },
        React.createElement(SearchBar_1["default"], null))); });
};
exports["default"] = League;
