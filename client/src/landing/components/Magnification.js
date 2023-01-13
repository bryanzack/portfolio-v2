"use strict";
exports.__esModule = true;
var React = require('react');
require("./Magnification.css");
var fiber_1 = require("@react-three/fiber");
var Magnification = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "magnification" },
            React.createElement(fiber_1.Canvas, null,
                React.createElement("ambientLight", { intensity: 0.1 }),
                React.createElement("directionalLight", { color: "red", position: [0, -10, 5] }),
                React.createElement("mesh", null,
                    React.createElement("sphereGeometry", { args: [2, 16, 32] }),
                    React.createElement("meshStandardMaterial", null))))));
};
exports["default"] = Magnification;
