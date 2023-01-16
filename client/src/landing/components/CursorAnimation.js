"use strict";
exports.__esModule = true;
var React = require('react');
require("./CursorAnimation.css");
var web_1 = require("@react-spring/web");
var react_use_measure_1 = require("react-use-measure");
var fast = { tension: 1200, friction: 40 };
var slow = { mass: 10, tension: 200, friction: 50 };
var transInvertedXY = function (x, y) {
    return "translate3d(".concat(window.innerWidth - x, "px,").concat(window.innerHeight - y, "px,0) translate3d(-50%,-50%,0)");
};
var transInvertedX = function (x, y) {
    return "translate3d(".concat(window.innerWidth - x, "px,").concat(y, "px,0) translate3d(-50%,-50%,0)");
};
var transInvertedY = function (x, y) {
    return "translate3d(".concat(x, "px,").concat(window.innerHeight - y, "px,0) translate3d(-50%,-50%,0)");
};
var trans = function (x, y) {
    return "translate3d(".concat(x, "px,").concat(y, "px,0) translate3d(-50%,-50%,0)");
};
var CursorAnimation = function () {
    var _a = (0, web_1.useTrail)(3, function (i) { return ({
        xy: [580, 600],
        config: i === 0 ? fast : slow
    }); }), trail = _a[0], api = _a[1];
    var _b = (0, react_use_measure_1["default"])(), ref = _b[0], _c = _b[1], left = _c.left, top = _c.top;
    var handleMouseMove = function (e) {
        api.start({ xy: [e.clientX - left, e.clientY - top] });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'cursor-animation-container-far' },
            React.createElement("svg", { style: { position: "absolute", width: 0, height: 0 } },
                React.createElement("filter", { id: "goo" },
                    React.createElement("feGaussianBlur", { "in": "SourceGraphic", result: "blur", stdDeviation: "30" }),
                    React.createElement("feColorMatrix", { "in": "blur", values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" }))),
            React.createElement("div", { ref: ref, className: 'cursor-animation-main', onMouseMove: handleMouseMove }, trail.map(function (props, index) { return (React.createElement(web_1.animated.div, { key: index, style: { transform: props.xy.to(trans) } })); })),
            React.createElement("div", { ref: ref, className: 'cursor-animation-main', onMouseMove: handleMouseMove }, trail.map(function (props, index) { return (React.createElement(web_1.animated.div, { key: index, style: { transform: props.xy.to(transInvertedXY) } })); }))),
        React.createElement("div", { className: 'cursor-animation-container-close' },
            React.createElement("svg", { style: { position: "absolute", width: 0, height: 0 } },
                React.createElement("filter", { id: "goo" },
                    React.createElement("feGaussianBlur", { "in": "SourceGraphic", result: "blur", stdDeviation: "30" }),
                    React.createElement("feColorMatrix", { "in": "blur", values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" }))),
            React.createElement("div", { ref: ref, className: 'cursor-animation-main', onMouseMove: handleMouseMove }, trail.map(function (props, index) { return (React.createElement(web_1.animated.div, { key: index, style: { transform: props.xy.to(transInvertedX) } })); })),
            React.createElement("div", { ref: ref, className: 'cursor-animation-main', onMouseMove: handleMouseMove }, trail.map(function (props, index) { return (React.createElement(web_1.animated.div, { key: index, style: { transform: props.xy.to(transInvertedY) } })); })))));
};
exports["default"] = CursorAnimation;
