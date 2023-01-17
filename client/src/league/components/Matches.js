"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var react_redux_1 = require("react-redux");
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
var Matches = function () {
    var user_input = (0, react_redux_1.useSelector)(function (state) { return state.league.user_input; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.league.selected_region; });
    console.log(user_input, selected_region);
    var _a = (0, api_1.useGetSummonerDataQuery)({ region: selected_region, name: user_input }), summoner = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (!summoner)
        return React.createElement("div", null, "Missing summoner!");
    return (React.createElement(Test, { name: summoner.name, region: summoner.id }));
};
exports["default"] = Matches;
