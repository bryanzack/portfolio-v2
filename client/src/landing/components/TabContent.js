"use strict";
exports.__esModule = true;
var React = require('react');
require("./TabContent.css");
var react_redux_1 = require("react-redux");
var About = function (_a) {
    var children = _a.children;
    var items = React.Children.toArray(children);
    return (React.createElement("div", { className: "tab-content" }, items.map(function (item, index) { return (React.createElement("div", { key: index }, item)); })));
};
var Tech = function () {
    return (React.createElement("div", { className: "tab-content" },
        React.createElement("h1", null, "Tech")));
};
var Projects = function () {
    return (React.createElement("div", { className: "tab-content" },
        React.createElement("h1", null, "Projects")));
};
var TabContent = function () {
    var active_tab = (0, react_redux_1.useSelector)(function (state) { return state.nav.active_tab; });
    switch (active_tab) {
        case 'about':
            return (React.createElement(About, null,
                React.createElement("h1", null, "PENN STATE"),
                React.createElement("h1", null, "MUSIC ENTHUSIAST"),
                React.createElement("h1", null, "WEB DEVELOPER")));
        case 'tech':
            return (React.createElement(Tech, null));
        case 'projects':
            return (React.createElement(Projects, null));
    }
    return (React.createElement("div", { className: "tab-content" },
        React.createElement("h1", null, "About")));
};
exports["default"] = TabContent;
