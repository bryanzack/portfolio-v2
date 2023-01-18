"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var Match = function (props) {
    var today_epoch = new Date().getTime() / 1000; // in seconds
    var today_date = new Date(today_epoch);
    var end_epoch = props.match.info.gameEndTimestamp;
    var end_date = new Date(end_epoch);
    var time_since = today_date.getTime() - end_date.getTime();
    var game_mode = props.match.info.gameMode;
    console.log(props.match);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "match" },
            React.createElement("div", { className: "match-content" },
                React.createElement("div", { className: "metadata" },
                    React.createElement("span", null, game_mode),
                    React.createElement("span", null, time_since)),
                React.createElement("div", { className: "loadout" }),
                React.createElement("div", { className: "stats" }),
                React.createElement("div", { className: "players" },
                    React.createElement("div", { className: "team1" }),
                    React.createElement("div", { className: "team2" }))),
            React.createElement("div", { className: "match-dropdown" }))));
};
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
var Matches = function (props) {
    var _a = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name }), match_list = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if (!match_list || match_list.length === 0)
        return React.createElement("div", null, "No matches found...");
    if (isError)
        return React.createElement("div", null, "Error...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" }, match_list.map(function (item) { return (React.createElement(Match, { match: item })); })),
        React.createElement("button", { className: "load-more" }, "Load more...")));
};
exports["default"] = Matches;
