"use strict";
exports.__esModule = true;
var React = require('react');
require("./BryanZack.css");
var react_1 = require("react");
var web_1 = require("@react-spring/web");
var BryanZack = function () {
    var _a = (0, react_1.useState)(false), is_hover = _a[0], setHover = _a[1];
    var resume_spring = (0, web_1.useSpring)({
        to: {
            y: is_hover ? -65 : 0
        }
    });
    var name_spring = (0, web_1.useSpring)({
        to: { opacity: is_hover ? 0 : 1 },
        config: {
            duration: 100
        }
    });
    var download_spring = (0, web_1.useSpring)({
        to: { opacity: is_hover ? 1 : 0 },
        config: {
            duration: 100
        }
    });
    return (React.createElement(web_1.animated.div, { className: "bryan-zack", style: resume_spring, onMouseLeave: function () { return setHover(false); }, onMouseEnter: function () { return setHover(true); } },
        React.createElement(web_1.animated.h1, { style: name_spring, className: "my-name" }, "bryan zack"),
        React.createElement("a", { className: "resume-link", href: require('../static/resume.pdf'), target: "_blank" },
            React.createElement(web_1.animated.div, { style: download_spring, className: "resume" },
                React.createElement("h1", null, "resume"),
                React.createElement("img", { className: "download-icon", src: require('../static/images/download.png'), alt: "download", width: "35", height: "35" })))));
};
exports["default"] = BryanZack;
