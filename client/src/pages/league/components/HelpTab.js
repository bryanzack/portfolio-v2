"use strict";
exports.__esModule = true;
var React = require('react');
require("./HelpTab.css");
var react_1 = require("react");
var web_1 = require("@react-spring/web");
var HelpTab = function () {
    var _a = (0, react_1.useState)(true), show_help = _a[0], setShowHelp = _a[1];
    /// -18vw
    var styles = (0, web_1.useSpring)({
        from: { left: show_help ? '-18vw' : '0vw' },
        to: { left: show_help ? '0vw' : '-18vw' }
    });
    return (React.createElement(web_1.animated.div, { style: styles, className: "help-tab" },
        React.createElement("div", { className: "help-content" }),
        React.createElement("div", { className: "help-button-container" },
            React.createElement("div", { className: "help-button", onClick: function () { return setShowHelp(!show_help); } }))));
};
exports["default"] = HelpTab;
