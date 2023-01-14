"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require('react');
require("./Page.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var web_1 = require("@react-spring/web");
var react_router_dom_1 = require("react-router-dom");
var Trail = function (_a) {
    var open = _a.open, children = _a.children;
    var items = React.Children.toArray(children);
    var trail = (0, web_1.useTrail)(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        reset: true,
        from: { opacity: 0, x: 20, height: 0 }
    });
    return (React.createElement("div", null, trail.map(function (_a, index) {
        var height = _a.height, style = __rest(_a, ["height"]);
        return (React.createElement(web_1.animated.div, { key: index, className: 'trailsText', style: style },
            React.createElement(web_1.animated.div, { style: { height: height } }, items[index])));
    })));
};
var Page = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var active_tab = (0, react_redux_1.useSelector)(function (state) { return state.nav.active_tab; });
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(""), hover = _b[0], setHover = _b[1];
    var about = ['PHOTOGRAPHY', 'PENNSTATE', 'WEBDEV', 'MUSIC'];
    var tech = ['TYPESCRIPT', 'REACTJS', 'REDUX', 'NODE'];
    var projects = ['DATADISPLAY', 'PORTFOLIO', 'CARDS', '...'];
    var handleClick = function (item) {
        switch (item) {
            case 'CARDS':
                console.log("send user to card game selection");
                navigate("/blackjack");
                break;
            default:
                console.log("clicked: " + item);
        }
    };
    (0, react_1.useEffect)(function () {
        setOpen(false);
        setTimeout(function () {
            setOpen(true);
        }, 100);
    }, [active_tab]);
    return (React.createElement("div", { className: 'tab-content' },
        React.createElement("div", { className: 'container' },
            React.createElement(Trail, { open: open },
                active_tab === 'about' && about.map(function (item, index) { return (React.createElement("span", { onClick: function () { return handleClick(item); }, key: index }, item)); }),
                active_tab === 'tech' && tech.map(function (item, index) { return (React.createElement("span", { onClick: function () { return handleClick(item); }, key: index }, item)); }),
                active_tab === 'projects' && projects.map(function (item, index) { return (React.createElement("span", { onClick: function () { return handleClick(item); }, key: index }, item)); })))));
};
exports["default"] = Page;
