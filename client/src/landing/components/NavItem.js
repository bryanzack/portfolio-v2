"use strict";
exports.__esModule = true;
var React = require('react');
require("./NavItem.css");
var react_redux_1 = require("react-redux");
var navSlice_1 = require("../reducers/navSlice");
var handleNavHover_1 = require("../helpers/handleNavHover");
var NavItem = function (_a) {
    var tab_name = _a.tab_name;
    var active_tab = (0, react_redux_1.useSelector)(function (state) { return state.nav.active_tab; });
    var is_hover = (0, react_redux_1.useSelector)(function (state) { return state.nav.is_hover; });
    var visible_tabs = (0, react_redux_1.useSelector)(function (state) { return state.nav.visible_tabs; });
    var tabs = (0, react_redux_1.useSelector)(function (state) { return state.nav.tabs; });
    var mouseEnter = function () {
        dispatch((0, navSlice_1.toggleHover)((0, handleNavHover_1["default"])(tabs, 'enter', tab_name)));
    };
    var mouseClick = function (tab_name) {
        console.log(tab_name);
        dispatch((0, navSlice_1.switchToTab)(tab_name));
    };
    var dispatch = (0, react_redux_1.useDispatch)();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "contents", id: tab_name },
            React.createElement("h1", { onMouseEnter: function () { return mouseEnter(); }, onClick: function () { return mouseClick(tab_name); } }, visible_tabs.includes(tab_name) ? tab_name : ""))));
};
exports["default"] = NavItem;
// <h1 onClick={() => tab_name === active_tab ? dispatch(switchToTab('')) : dispatch(switchToTab(tab_name))}>{tab_name === active_tab ? tab_name : tab_name[0]}</h1>
