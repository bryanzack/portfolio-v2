"use strict";
exports.__esModule = true;
var React = require('react');
require("./HelpTab.css");
var react_1 = require("react");
var web_1 = require("@react-spring/web");
var HelpTab = function () {
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
    return (React.createElement(web_1.animated.div, { style: help_tab, className: "help-tab", onClick: function () { return setShowHelp(!show_help); } },
        React.createElement("div", { className: "help-content" },
            React.createElement(web_1.animated.div, { style: text_style, className: "help-content-inner" },
                React.createElement("h1", null, "What does this do"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "This page allows you to see the last 10 games of any ",
                        React.createElement("a", { className: "api-link", target: "_blank", href: "https://en.wikipedia.org/wiki/League_of_Legends" }, "League of Legends"),
                        " player.")),
                React.createElement("h1", null, "How does it work"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Given a region/username combination, several requests are made to the official ",
                        React.createElement("a", { className: "api-link", href: 'https://developer.riotgames.com/apis', target: "_blank" }, "Riot API."),
                        " First, a request containing the given region/username is sent to a ",
                        React.createElement("a", { className: "api-link", href: "https://developer.riotgames.com/apis#summoner-v4", target: "_blank" }, "summoners/v4"),
                        " endpoint to get the users puuid. Next, the now retrieved puuid is used to make a request to the ",
                        React.createElement("a", { className: "api-link", href: "https://developer.riotgames.com/apis#match-v5", target: "_blank" }, "match/v5"),
                        " endpoint, which returns a list of match ids. Finally, a request is made for each match id to ",
                        React.createElement("a", { className: "api-link", href: "https://developer.riotgames.com/apis#match-v5", target: "_blank" }, "match/v5"),
                        " again. This time an object containing all the game data is returned to the server, sent to the user, and rendered.")),
                React.createElement("h1", null, "Why did I make this"),
                React.createElement("ul", null,
                    React.createElement("li", null, "I made this to learn more about data retrieval, dynamic routing, caching (RTK Query & cookies), and state management")),
                React.createElement("h1", null, "What tools did I use"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Redux Toolkit Query (RTK Query)"),
                    React.createElement("li", null, "Redux Toolkit"),
                    React.createElement("li", null, "React"))))));
};
exports["default"] = HelpTab;
