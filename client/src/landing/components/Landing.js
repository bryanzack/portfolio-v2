"use strict";
exports.__esModule = true;
var React = require('react');
require("./Landing.css");
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var web_1 = require("@react-spring/web");
var TestBox = function () {
    var myMesh = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(function (_a) {
        var clock = _a.clock;
        myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    });
    return (React.createElement("mesh", { ref: myMesh, onClick: function (e) { return console.log("Test!"); }, onPointerMissed: function () { return console.log("miss!"); } },
        React.createElement("boxGeometry", null),
        React.createElement("meshBasicMaterial", { color: 'royalblue' })));
};
var Line = function (props) {
    var arr = [];
    for (var i = 0; i < 30; i++) {
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
    for (var i = 0; i < 40; i++) {
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
    var clicked = {
        border: '2px solid black'
    };
    var notclicked = {
        border: 'none'
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: "names-container" },
            React.createElement("div", { className: 'names', onMouseEnter: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } }, arr.map(function (index) {
                return React.createElement(Line, { num: index, key: index });
            })),
            React.createElement("div", { style: mouseHover ? active : inactive, className: "background" }))));
};
var Landing = function () {
    var fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return fadeIn(function (style) { return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { style: style, className: "landing" },
            React.createElement("div", { className: "sidewaystext" },
                React.createElement("h1", null, "bryan zack")),
            React.createElement(Names, null)))); });
};
exports["default"] = Landing;
/*

            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color={"red"} position={[0,0,5]} />
                <mesh>
                    <boxGeometry args={[2,2,2]}/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
 */ 
