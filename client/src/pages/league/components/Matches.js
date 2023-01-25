"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../../store/api");
var universal_cookie_1 = require("universal-cookie");
var Match_1 = require("./Match");
var Matches = function (props) {
    var cookies = new universal_cookie_1["default"]();
    var _a = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name }), match_response = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading, isError = _a.isError;
    console.log(match_response);
    if (isLoading)
        return React.createElement("div", { className: "state-indicator" },
            React.createElement("h1", null, "Loading..."));
    if (isFetching)
        return React.createElement("div", { className: "state-indicator" },
            React.createElement("h1", null, "Fetching..."));
    if ((match_response === null || match_response === void 0 ? void 0 : match_response.response.status_code) === 404
        || (match_response === null || match_response === void 0 ? void 0 : match_response.match_list) === null)
        return React.createElement("div", null,
            " 404 ",
            match_response.response.message);
    if (isError)
        return React.createElement("div", null,
            React.createElement("h1", null, "Error..."));
    var win = undefined;
    var json = cookies.get('hist');
    // TODO `put cookie handling in helper function
    if (json !== undefined && json.length !== 0) {
        console.log('results found');
        var doesCookieExist = false;
        for (var entry in json) {
            if (json[entry].name === props.args.name)
                doesCookieExist = true;
            else
                console.log("cookie exists");
        }
        if (!doesCookieExist) {
            if (json.length < 5)
                cookies.set('hist', __spreadArray([{ name: props.args.name, region: props.args.region }], json, true), { path: '/' });
            else
                cookies.set('hist', __spreadArray([{ name: props.args.name, region: props.args.region }], json.slice(0, 4), true), { path: '/' });
        }
    }
    else {
        console.log("empty cookies, adding entry");
        cookies.set('hist', [{ name: props.args.name, region: props.args.region }], { path: '/' });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" }, match_response.match_list.map(function (item) {
            item.info.participants.map(function (participant) {
                if (participant.puuid === (match_response === null || match_response === void 0 ? void 0 : match_response.user_puuid)) {
                    win = participant.win;
                }
            });
            // no one cares about tutorial games + they are inconsistent with data of other game types (no rune data)
            if (item.info.gameMode !== 'TUTORIAL_MODULE_1'
                && item.info.gameMode !== 'TUTORIAL_MODULE_2'
                && item.info.gameMode !== 'TUTORIAL_MODULE_3')
                return React.createElement(Match_1["default"], { match: item, win: win, puuid: match_response.user_puuid });
        })),
        React.createElement("button", { className: "load-more" }, "Load more...")));
};
exports["default"] = Matches;
