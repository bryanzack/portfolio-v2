"use strict";
exports.__esModule = true;
var React = require('react');
require("./Nav.css");
var web_1 = require("@react-spring/web");
var react_redux_1 = require("react-redux");
var navSlice_1 = require("../reducers/navSlice");
var handleNavHover_1 = require("../helpers/handleNavHover");
var NavItem_1 = require("./NavItem");
var Nav = function () {
    //const activeTab = useSelector((state: RootState) => state.active_tab);
    /*
    const spring = useSpring({
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.test ? 1 : 0,
        x: props.test ? 0 : 20,
        height: props.test ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    */
    var tabs = (0, react_redux_1.useSelector)(function (state) { return state.nav.tabs; });
    var active_tab = (0, react_redux_1.useSelector)(function (state) { return state.nav.active_tab; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (React.createElement(React.Fragment, null,
        React.createElement(web_1.animated.div, { className: "nav-contents" },
            React.createElement("div", { onMouseLeave: function () { return dispatch((0, navSlice_1.toggleHover)((0, handleNavHover_1["default"])(tabs, 'leave', active_tab))); }, className: "nav-fit" }, tabs.map(function (tab, index) {
                return React.createElement(NavItem_1["default"], { key: index, tab_name: tab });
            })))));
};
exports["default"] = Nav;
