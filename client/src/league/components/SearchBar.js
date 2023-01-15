"use strict";
exports.__esModule = true;
var React = require('react');
require("./SearchBar.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var searchBarSlice_1 = require("../reducers/searchBarSlice");
var SearchBar = function () {
    var regions = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.regions; });
    var selected_region = (0, react_redux_1.useSelector)(function (state) { return state.searchbar.selected_region; });
    var _a = (0, react_1.useState)(false), region_menu = _a[0], setRegionMenu = _a[1];
    var handleRegionClick = function (item) {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        console.log("regions:", +regions);
        console.log("active_region: ", +selected_region);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "searchbar" },
            React.createElement("div", { className: "bar" },
                region_menu
                    ?
                        React.createElement("div", { className: "region-menu" },
                            React.createElement("div", { className: "regions" },
                                React.createElement("span", null, selected_region),
                                regions.map(function (item, index) {
                                    if (item !== selected_region)
                                        return React.createElement("span", { key: index, onClick: function () { return handleRegionClick(item); } }, item);
                                })))
                    :
                        React.createElement("div", { className: "region-button", onClick: function () { return setRegionMenu(true); } },
                            React.createElement("p", null, selected_region)),
                React.createElement("input", { type: "text", className: "username-input" }),
                React.createElement("button", { className: "submit-button" }, "Search")))));
};
exports["default"] = SearchBar;
