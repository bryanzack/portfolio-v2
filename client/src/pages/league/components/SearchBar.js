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
require("./SearchBar.css");
var universal_cookie_1 = require("universal-cookie");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var searchBarSlice_1 = require("../reducers/searchBarSlice");
var leagueSlice_1 = require("../reducers/leagueSlice");
var regions_1 = require("../helpers/regions");
var SearchBar = function () {
    var cookies = new universal_cookie_1["default"];
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(cookies.get('hist')), cookie = _a[0], setCookie = _a[1];
    var regions = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.regions; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    var user_input = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.user_input; });
    var _b = (0, react_1.useState)(false), region_menu = _b[0], setRegionMenu = _b[1];
    var show_history = (0, react_redux_1.useSelector)(function (state) { return state.league.show_history; });
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var handleInputChange = function (event) {
        dispatch((0, searchBarSlice_1.updateUserInput)(event.target.value));
        console.log(event.target.value);
    };
    // TODO `differentiate between history click submit & user input submit
    var handleSubmit = function (region, name, method) {
        setRegionMenu(false);
        dispatch((0, leagueSlice_1.setShowHistory)(false));
        if ((user_input && method === 'user') || method === 'history') {
            console.log(region + " " + name);
            navigate("/league/".concat(region, "/").concat(name));
            // `TODO: add typing to avoid any types
            if (cookie !== undefined) {
                setCookie(__spreadArray([{ region: region, name: name }], cookie.filter(function (item) { return item.name !== name; }).slice(0, 4), true));
                cookies.set('hist', __spreadArray([{
                        region: region,
                        name: name
                    }], cookie.filter(function (item) { return item.name !== name; }), true), { path: '/' });
            }
            else {
                setCookie([{ region: region, name: name }]);
                cookies.set('hist', [{
                        region: region,
                        name: name
                    }], { path: '/' });
            }
            document.activeElement.blur();
        }
    };
    var handleRemoveCookie = function (region, name) {
        dispatch((0, leagueSlice_1.setShowHistory)(true));
        console.log("remove cookie: ".concat(region, " : ").concat(name));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "searchbar" },
            React.createElement("div", { className: "bar" },
                region_menu
                    ?
                        React.createElement("div", { className: "region-menu" },
                            React.createElement("div", { className: "regions" },
                                React.createElement("span", { onClick: function () { return setRegionMenu(false); } }, regions_1["default"][selected_region].abbreviation),
                                regions.map(function (item, index) {
                                    if (item !== selected_region)
                                        return React.createElement("span", { key: index, onClick: function () { return handleRegionClick(item); } }, regions_1["default"][item].abbreviation);
                                })))
                    :
                        React.createElement("div", { className: "region-button", onClick: function () { return setRegionMenu(true); } },
                            React.createElement("p", null, regions_1["default"][selected_region].abbreviation)),
                React.createElement("input", { className: "username-input", value: user_input, onInput: handleInputChange, onFocus: function () { return dispatch((0, leagueSlice_1.setShowHistory)(true)); }, onBlur: function () { return dispatch((0, leagueSlice_1.setShowHistory)(false)); }, type: "text", onKeyUp: function (event) { if (event.code === "Enter")
                        handleSubmit(selected_region, user_input, 'user'); } }),
                React.createElement("button", { className: "submit-button", onClick: function () { return handleSubmit(selected_region, user_input, 'user'); } }, "Search"),
                (show_history && cookies.get('hist') !== undefined) &&
                    React.createElement("div", { className: "search-history" }, cookie.map(function (cookie, index) { return (React.createElement("div", { className: "history-entry" },
                        React.createElement("div", { className: "history-clickable", onMouseDown: function () { handleSubmit(cookie.region, cookie.name, 'history'); } },
                            React.createElement("div", { className: "history-region" }, regions_1["default"][cookie.region].abbreviation),
                            React.createElement("div", { className: "history-name" }, cookie.name)),
                        React.createElement("button", { className: "history-remove", onMouseDown: function () { return handleRemoveCookie(user_input, selected_region); } }, "x"))); }))))));
};
exports["default"] = SearchBar;
