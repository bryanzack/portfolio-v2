"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Nav.css");
const web_1 = require("@react-spring/web");
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
    })
    */
    return (<web_1.animated.div className={"nav-contents"}>
            <NavItem_1.default tab_name={"tech"}/>
            <NavItem_1.default tab_name={"about"}/>
            <NavItem_1.default tab_name={"projects"}/>
        </web_1.animated.div>);
};
exports.default = Nav;
