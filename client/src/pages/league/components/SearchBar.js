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
    (0, react_1.useEffect)(function () {
        console.log(cookies.get('hist'));
    }, []);
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var handleInputChange = function (event) {
        dispatch((0, searchBarSlice_1.updateUserInput)(event.target.value));
        console.log(event.target.value);
    };
    var handleSubmit = function (region, name) {
        setRegionMenu(false);
        dispatch((0, leagueSlice_1.setShowHistory)(false));
        if (user_input) {
            console.log(region + " " + name);
            // `TODO: add typing to avoid any types
            navigate("/league/".concat(region, "/").concat(name));
            if (cookie !== undefined) {
                setCookie(__spreadArray([{ region: region, name: name }], cookie.filter(function (item) { return item.name !== name; }).slice(0, 4), true));
                cookies.set('hist', __spreadArray([{
                        region: region,
                        name: name
                    }], cookie.filter(function (item) { return item.name !== name; }), true));
            }
            else {
                setCookie([{ region: region, name: name }]);
                cookies.set('hist', [{
                        region: region,
                        name: name
                    }]);
            }
            document.activeElement.blur();
        }
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
                React.createElement("input", { className: "username-input", value: user_input, onInput: handleInputChange, onFocus: function () { return dispatch((0, leagueSlice_1.setShowHistory)(true)); }, type: "text", onKeyUp: function (event) { if (event.code === "Enter")
                        handleSubmit(selected_region, user_input); } }),
                React.createElement("button", { className: "submit-button", onClick: function () { return handleSubmit(selected_region, user_input); } }, "Search"),
                (show_history && cookies.get('hist') !== undefined) &&
                    React.createElement("div", { className: "search-history", onMouseLeave: function () { return dispatch((0, leagueSlice_1.setShowHistory)(false)); } }, cookie.map(function (cookie, index) { return (React.createElement("div", { className: "history-entry" },
                        React.createElement("div", { className: "history-clickable", onClick: function () { handleSubmit(cookie.region, cookie.name); } },
                            React.createElement("div", { className: "history-region" }, regions_1["default"][cookie.region].abbreviation),
                            React.createElement("div", { className: "history-name" }, cookie.name)),
                        React.createElement("button", { className: "history-remove" }, "x"))); }))))));
};
exports["default"] = SearchBar;
