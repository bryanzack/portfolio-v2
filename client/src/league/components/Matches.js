"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var translateTimeStamps_1 = require("../helpers/translateTimeStamps");
var Match = function (props) {
    var now_timestamp = new Date().getTime();
    var end_timestamp = (props.match.info.gameCreation + props.match.info.gameDuration);
    var seconds_since = (now_timestamp - end_timestamp) / 1000;
    var time_since = (0, translateTimeStamps_1.handleTimeSince)(seconds_since);
    var game_duration = (0, translateTimeStamps_1.handleTimeLength)(props.match.info.gameDuration);
    var game_mode = props.match.info.gameMode;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: props.win ? "match-win" : "match-lose" },
            React.createElement("div", { className: "match-content" },
                React.createElement("div", { className: "metadata" },
                    React.createElement("div", { className: props.win ? "game-mode-win" : "game-mode-lose" }, game_mode),
                    React.createElement("div", { className: "time-since" }, time_since),
                    React.createElement("div", { className: "result" }, props.win ? "Victory" : "Defeat"),
                    React.createElement("div", { className: "duration" }, game_duration)),
                React.createElement("div", { className: "loadout" }),
                React.createElement("div", { className: "stats" }),
                React.createElement("div", { className: "players" },
                    React.createElement("div", { className: "team1" }),
                    React.createElement("div", { className: "team2" }))),
            React.createElement("div", { className: "match-dropdown" }))));
};
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
var Matches = function (props) {
    var _a = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name }), match_response = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading, isError = _a.isError;
    console.log("match response:");
    console.log(match_response);
    console.log("indexof");
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if ((match_response === null || match_response === void 0 ? void 0 : match_response.response.status_code) === 404)
        return React.createElement("div", null,
            " 404 ",
            match_response.response.message);
    if (isError)
        return React.createElement("div", null, "Error...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" }, match_response.match_list.map(function (item) {
            var win = undefined;
            item.info.participants.map(function (participant) {
                if (participant.puuid === (match_response === null || match_response === void 0 ? void 0 : match_response.user_puuid)) {
                    win = participant.win;
                }
            });
            return React.createElement(Match, { match: item, win: win });
        })),
        React.createElement("button", { className: "load-more" }, "Load more...")));
};
exports["default"] = Matches;
