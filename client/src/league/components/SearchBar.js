"use strict";
exports.__esModule = true;
var React = require('react');
require("./SearchBar.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var searchBarSlice_1 = require("../reducers/searchBarSlice");
var regions_1 = require("../helpers/regions");
var SearchBar = function () {
    var regions = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.regions; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    var _a = (0, react_1.useState)(false), region_menu = _a[0], setRegionMenu = _a[1];
    var _b = (0, react_1.useState)(""), hovered_region = _b[0], setHoveredRegion = _b[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var handleRegionEnter = function (item) {
    };
    var handleRegionLeave = function () {
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
                React.createElement("input", { className: "username-input", onClick: function () { return setRegionMenu(false); }, type: "text" }),
                React.createElement("button", { className: "submit-button" }, "Search")))));
};
exports["default"] = SearchBar;
