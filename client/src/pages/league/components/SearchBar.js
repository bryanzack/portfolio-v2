"use strict";
exports.__esModule = true;
var React = require('react');
require("./SearchBar.css");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var searchBarSlice_1 = require("../reducers/searchBarSlice");
var leagueSlice_1 = require("../reducers/leagueSlice");
var regions_1 = require("../helpers/regions");
var SearchBar = function () {
    var regions = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.regions; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    var user_input = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.user_input; });
    var _a = (0, react_1.useState)(false), region_menu = _a[0], setRegionMenu = _a[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var handleRegionEnter = function (item) {
    };
    var handleRegionLeave = function () {
    };
    var handleInputChange = function (event) {
        dispatch((0, searchBarSlice_1.updateUserInput)(event.target.value));
        console.log(event.target.value);
    };
    var handleSubmit = function () {
        if (user_input) {
            setRegionMenu(false);
            navigate("/league/".concat(selected_region, "/").concat(user_input));
            dispatch((0, leagueSlice_1.setSearchParams)({ selected_region: selected_region, user_input: user_input }));
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
                                        return React.createElement("span", { key: index, onClick: function () { return handleRegionClick(item); }, onMouseEnter: function () { return handleRegionEnter(item); }, onMouseLeave: function () { return handleRegionLeave(); } }, regions_1["default"][item].abbreviation);
                                })))
                    :
                        React.createElement("div", { className: "region-button", onClick: function () { return setRegionMenu(true); } },
                            React.createElement("p", null, regions_1["default"][selected_region].abbreviation)),
                React.createElement("input", { className: "username-input", value: user_input, onClick: function () { return setRegionMenu(false); }, onInput: handleInputChange, type: "text", onKeyUp: function (event) { if (event.code === "Enter")
                        handleSubmit(); } }),
                React.createElement("button", { className: "submit-button", onClick: function () { return handleSubmit(); } }, "Search")))));
};
exports["default"] = SearchBar;
