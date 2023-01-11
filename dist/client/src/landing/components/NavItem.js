"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./NavItem.css");
const react_redux_1 = require("react-redux");
const NavItem = ({ tab_name }) => {
    const activeTab = (0, react_redux_1.useSelector)((state) => state.active_tab);
    const active = {
        display: 'none',
    };
    const inactive = {
        display: 'flex',
    };
    return (<>
            <div className="contents" id={tab_name} style={tab_name === activeTab ? active : inactive}>
                <h1>{tab_name}</h1>
            </div>
        </>);
};
exports.default = NavItem;
