"use strict";
exports.__esModule = true;
var React = require('react');
require("./Landing.css");
var web_1 = require("@react-spring/web");
var Nav_js_1 = require("./Nav.js");
var Page_1 = require("./Page");
var CursorAnimation_1 = require("./CursorAnimation");
var BryanZack_1 = require("./BryanZack");
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
            React.createElement(BryanZack_1["default"], null),
            React.createElement(Nav_js_1["default"], null),
            React.createElement(Page_1["default"], null),
            React.createElement(CursorAnimation_1["default"], null)))); });
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
