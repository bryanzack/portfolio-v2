"use strict";
exports.__esModule = true;
var web_1 = require("@react-spring/web");
var React = require('react');
var react_1 = require("react");
var Line = function (props) {
    var arr = [];
    for (var i = 0; i < 20; i++) {
        arr.push(i);
    }
    return (React.createElement("div", { className: "line" }, arr.map(function (index) {
        return React.createElement("p", { key: index }, "bryan zack \u00A0");
    })));
};
var Names = function () {
    var _a = (0, react_1.useState)(false), mouseHover = _a[0], setMouseHover = _a[1];
    var _b = (0, react_1.useState)(false), isClicked = _b[0], setClicked = _b[1];
    var arr = [];
    for (var i = 0; i < 30; i++) {
        arr.push(i);
    }
    var active = {
        opacity: 1,
        transition: 'opacity 500ms'
    };
    var inactive = {
        opacity: 0,
        transition: 'opacity 500ms'
    };
    var click = (0, web_1.useSpring)({
        border: isClicked ? '4px solid black' : 'none'
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { onClick: function () { return setClicked(!isClicked); }, className: "names-container" },
            React.createElement("div", { className: 'names', onMouseEnter: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } }, arr.map(function (index) {
                return React.createElement(Line, { num: index, key: index });
            })),
            React.createElement("div", { style: active, className: "background" },
                React.createElement("div", { className: "hard-background" })))));
};
exports["default"] = Names;
