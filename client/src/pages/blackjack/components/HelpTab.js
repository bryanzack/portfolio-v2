"use strict";
exports.__esModule = true;
var React = require('react');
require("./HelpTab.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var web_1 = require("@react-spring/web");
var HelpTab = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(true), show_help = _a[0], setShowHelp = _a[1];
    /// -18vw
    var help_tab = (0, web_1.useSpring)({
        from: {
            left: show_help ? '-18vw' : '0vw'
        },
        to: {
            left: show_help ? '0vw' : '-18vw'
        }
    });
    var text_style = (0, web_1.useSpring)({
        from: {
            opacity: show_help ? 0 : 1
        },
        to: {
            opacity: show_help ? 1 : 0
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { style: help_tab, className: "help-tab", onClick: function () { return setShowHelp(!show_help); } },
            React.createElement("div", { className: "help-content" },
                React.createElement(web_1.animated.div, { style: text_style, className: "help-content-inner" },
                    React.createElement("h1", null, "What does this do"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            "This page lets you play ",
                            React.createElement("a", { className: "info-link", target: "_blank", href: "https://en.wikipedia.org/wiki/Blackjack" }, "Blackjack"),
                            ".")),
                    React.createElement("h1", null, "How does it work"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "The object of the game is to win money by creating card totals higher than those of the dealer's hand but not exceeding 21, or by stopping at a total in the hope that the dealer will bust.")),
                    React.createElement("h1", null, "Why did I make this"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "I made this to learn more about state management and global state machines like Redux are useful.")),
                    React.createElement("h1", null, "What tools did I use"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Redux Toolkit"),
                        React.createElement("li", null, "React"))))),
        React.createElement("div", { className: "home-nav", onClick: function () { return navigate('/'); } })));
};
exports["default"] = HelpTab;
