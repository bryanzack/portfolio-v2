"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./NavItem.css");
const react_redux_1 = require("react-redux");
const navSlice_1 = require("../reducers/navSlice");
const handleNavHover_1 = __importDefault(require("../helpers/handleNavHover"));
const NavItem = ({ tab_name }) => {
    const active_tab = (0, react_redux_1.useSelector)((state) => state.nav.active_tab);
    const is_hover = (0, react_redux_1.useSelector)((state) => state.nav.is_hover);
    const visible_tabs = (0, react_redux_1.useSelector)((state) => state.nav.visible_tabs);
    const tabs = (0, react_redux_1.useSelector)((state) => state.nav.tabs);
    const mouseEnter = () => {
        dispatch((0, navSlice_1.toggleHover)((0, handleNavHover_1.default)(tabs, 'enter', tab_name)));
    };
    const mouseClick = (tab_name) => {
        console.log(tab_name);
        dispatch((0, navSlice_1.switchToTab)(tab_name));
    };
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<>
            <div className="contents" id={tab_name}>
                <h1 onMouseEnter={() => mouseEnter()} onClick={() => mouseClick(tab_name)}>
                    {visible_tabs.includes(tab_name) ? tab_name : ""}
                </h1>
            </div>
        </>);
};
exports.default = NavItem;
// <h1 onClick={() => tab_name === active_tab ? dispatch(switchToTab('')) : dispatch(switchToTab(tab_name))}>{tab_name === active_tab ? tab_name : tab_name[0]}</h1>
