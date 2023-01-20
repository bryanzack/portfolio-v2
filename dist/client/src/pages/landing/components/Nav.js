"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Nav.css");
const web_1 = require("@react-spring/web");
const react_redux_1 = require("react-redux");
const navSlice_1 = require("../reducers/navSlice");
const handleNavHover_1 = __importDefault(require("../helpers/handleNavHover"));
const NavItem_1 = __importDefault(require("./NavItem"));
const Nav = () => {
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
    const tabs = (0, react_redux_1.useSelector)((state) => state.nav.tabs);
    const active_tab = (0, react_redux_1.useSelector)((state) => state.nav.active_tab);
    const dispatch = (0, react_redux_1.useDispatch)();
    const trail = (0, web_1.useTrail)(tabs.length, {});
    return (<>
            <web_1.animated.div className={"nav-contents"}>
                <div onMouseLeave={() => dispatch((0, navSlice_1.toggleHover)((0, handleNavHover_1.default)(tabs, 'leave', active_tab)))} className="nav-fit">
                    {tabs.map((tab, index) => (<NavItem_1.default key={index} tab_name={tab}/>))}
                </div>
            </web_1.animated.div>
        </>);
};
exports.default = Nav;
