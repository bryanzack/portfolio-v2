"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../store/api");
var Test = function (_a) {
    var region = _a.region, name = _a.name;
    console.log("from test: ".concat(region, ", ").concat(name));
    return (React.createElement(React.Fragment, null,
        React.createElement("span", null,
            name,
            " ",
            region)));
};
var Matches = function (_a) {
    var region = _a.region, name = _a.name;
    console.log(region, name);
    var _b = (0, api_1.useGetSummonerDataQuery)({ region: region, name: name }), summoner = _b.data, isFetching = _b.isFetching, isLoading = _b.isLoading;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if (!summoner)
        return React.createElement("div", null, "Missing summoner!");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" },
            React.createElement("span", null, "MATCHES"),
            React.createElement(Test, { name: summoner.name, region: summoner.id }))));
};
exports["default"] = Matches;
