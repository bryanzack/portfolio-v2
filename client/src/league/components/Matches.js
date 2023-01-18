"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var Test = function (props) {
    console.log(props.summoner);
    return (React.createElement("div", { className: "data" },
        React.createElement("span", null,
            "id: ",
            props.summoner.id),
        React.createElement("span", null,
            "accountId: ",
            props.summoner.accountId),
        React.createElement("span", null,
            "puuid: ",
            props.summoner.puuid),
        React.createElement("span", null,
            "name: ",
            props.summoner.name),
        React.createElement("span", null,
            "profileIconId: ",
            props.summoner.profileIconId),
        React.createElement("span", null,
            "revisionDate: ",
            props.summoner.revisionDate),
        React.createElement("span", null,
            "summonerLevel: ",
            props.summoner.summonerLevel)));
};
var Matches = function (_a) {
    var region = _a.region, name = _a.name;
    var _b = (0, api_1.useGetSummonerDataQuery)({ region: region, name: name }), summoner = _b.data, error = _b.error, isFetching = _b.isFetching, isLoading = _b.isLoading;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if (!summoner || !summoner.id)
        return React.createElement("div", null, "Summoner not found...");
    if (error)
        return React.createElement("div", null, "Error...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" },
            React.createElement(Test, { summoner: summoner }))));
};
exports["default"] = Matches;
