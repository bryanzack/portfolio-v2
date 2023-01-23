"use strict";
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
    var cookies = new universal_cookie_1["default"]();
    var regions = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.regions; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    var user_input = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.user_input; });
    var _a = (0, react_1.useState)(false), region_menu = _a[0], setRegionMenu = _a[1];
    var show_history = (0, react_redux_1.useSelector)(function (state) { return state.league.show_history; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var handleInputChange = function (event) {
        dispatch((0, searchBarSlice_1.updateUserInput)(event.target.value));
        console.log(event.target.value);
    };
    var handleInputFocus = function () {
        setRegionMenu(false);
        //dispatch(setShowHistory(false));
    };
    var handleSubmit = function () {
        setRegionMenu(false);
        dispatch((0, leagueSlice_1.setShowHistory)(false));
        if (user_input) {
            console.log(selected_region + " " + user_input);
            navigate("/league/".concat(selected_region, "/").concat(user_input));
            document.activeElement.blur();
        }
    };
    var handleRemoveCookie = function (region, name) {
        var remove = { name: name, region: region };
        var new_cookies = cookies.get('hist').filter(function (thing) {
            console.log(thing);
            return (thing !== remove);
        });
        console.log(new_cookies);
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
                        handleSubmit(); } }),
                React.createElement("button", { className: "submit-button", onClick: function () { return handleSubmit(); } }, "Search"),
                show_history &&
                    React.createElement("div", { className: "search-history", onMouseLeave: function () { return dispatch((0, leagueSlice_1.setShowHistory)(false)); } }, cookies.get('hist').map(function (cookie, index) { return (React.createElement("div", { className: "history-entry" },
                        React.createElement("div", { className: "history-clickable", onClick: function () { navigate("/league/".concat(cookie.region, "/").concat(cookie.name)); dispatch((0, leagueSlice_1.setShowHistory)(false)); } },
                            React.createElement("div", { className: "history-region" }, regions_1["default"][cookie.region].abbreviation),
                            React.createElement("div", { className: "history-name" }, cookie.name)),
                        React.createElement("button", { className: "history-remove", onClick: function () { return handleRemoveCookie(cookie.region, cookie.name); } }, "x"))); }))))));
};
exports["default"] = SearchBar;
