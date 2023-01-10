"use strict";
exports.__esModule = true;
var React = require('react');
require("./Landing.css");
var Line = function (props) {
    var evenStyle = {
    //color: "red",
    //marginLeft: '20px',
    };
    var oddStyle = {};
    var arr = [];
    for (var i = 0; i < 30; i++) {
        arr.push(i);
    }
    return (React.createElement("div", { className: "line", style: props.num % 2 === 0 ? evenStyle : {} }, arr.map(function (index) {
        return React.createElement("p", { key: index }, "bryan zack \u00A0");
    })));
};
var Landing = function () {
    var arr = [];
    for (var i = 0; i < 40; i++) {
        arr.push(i);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "landing" },
            React.createElement("div", { className: "sidewaystext" },
                React.createElement("h1", null, "bryan zack")),
            React.createElement("div", { className: "names" }, arr.map(function (index) {
                return React.createElement(Line, { num: index, key: index });
            })))));
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
