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
require("./Landing.css");
var web_1 = require("@react-spring/web");
var Names_js_1 = require("./Names.js");
var Trail = function (TrailProps) {
    var items = React.Children.toArray(TrailProps.itemsList);
    var trail = (0, web_1.useTrail)(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: TrailProps.open ? 1 : 0,
        x: TrailProps.open ? 0 : 20,
        height: TrailProps.open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 }
    });
    return (React.createElement("div", null, trail.map(function (_a, index) {
        var height = _a.height, style = __rest(_a, ["height"]);
        return (React.createElement(web_1.animated.div, { key: index, className: "trailsText", style: style },
            React.createElement(web_1.animated.div, { style: { height: height } }, items[index])));
    })));
};
var Landing = function () {
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    var arr = [];
    for (var i = 0; i < 150; i++) {
        arr.push(i);
    }
    return fadeIn(function (style) { return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { style: style, className: "landing" },
            React.createElement("div", { className: "sidewaystext" }, arr.map(function (index) {
                return React.createElement("h1", { key: index }, "bryan zack");
            })),
            React.createElement(Names_js_1["default"], null),
            React.createElement("div", { className: "hero" },
                React.createElement("h1", null, "about me"))))); });
};
exports["default"] = Landing;
/*

            <div className="three">
                <Canvas>
                    <hemisphereLight args={["blue", "red", .7]} />
                    <directionalLight position={[5,5,2]} intensity={.4}  />
                    <RotateSphere />
                </Canvas>
            </div>
 */ 
