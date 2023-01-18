"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var Match = function (props) {
    console.log(props.match);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "match" },
            React.createElement("span", null, props.match.info.gameId))));
};
// TODO `remove useless FC and pass in one object as prop
var Matches = function (_a) {
    var region = _a.region, name = _a.name;
    var _b = (0, api_1.useGetSummonerDataQuery)({ region: region, name: name }), match_list = _b.data, isFetching = _b.isFetching, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if (!match_list || match_list.length === 0)
        return React.createElement("div", null, "No matches found...");
    if (isError)
        return React.createElement("div", null, "Error...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" }, match_list.map(function (item) { return (React.createElement(Match, { match: item })); }))));
};
exports["default"] = Matches;
