"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var react_redux_1 = require("react-redux");
var api_1 = require("../../store/api");
var Test = function (_a) {
    var test = _a.test;
    var _b = (0, api_1.useGetSummonerDataQuery)({ region: test.region, name: test.name }), summoner = _b.data, isFetching = _b.isFetching, isLoading = _b.isLoading;
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (!summoner)
        return React.createElement("div", null, "Missing summoner!");
    return (React.createElement(React.Fragment, null,
        React.createElement("span", null,
            summoner.name,
            " ",
            summoner.id,
            " ",
            isFetching ? '...refetching' : '')));
};
var Matches = function () {
    var user_input = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.user_input; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    return (React.createElement(Test, { test: { name: user_input, region: selected_region } }));
};
exports["default"] = Matches;
