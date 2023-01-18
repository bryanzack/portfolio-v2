"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var Test = function (props) {
    console.log(props.match_list);
    props.match_list.map(function (item) {
        console.log(item);
    });
    return (React.createElement(React.Fragment, null, props.match_list.map(function (match) { return (React.createElement("div", { className: "matches" },
        React.createElement("span", null, match.info.gameId))); })));
};
var Matches = function (_a) {
    var region = _a.region, name = _a.name;
    var _b = (0, api_1.useGetSummonerDataQuery)({ region: region, name: name }), match_list = _b.data, error = _b.error, isFetching = _b.isFetching, isLoading = _b.isLoading;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if (!match_list)
        return React.createElement("div", null, "No matches found...");
    if (error)
        return React.createElement("div", null, "Error...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" },
            React.createElement(Test, { match_list: match_list }))));
};
exports["default"] = Matches;
