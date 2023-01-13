"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Page.css");
const react_redux_1 = require("react-redux");
const web_1 = require("@react-spring/web");
const PageContent = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = (0, web_1.useTrail)(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 50 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (<>
            <div className="tab-content">
                {trail.map((_a, index) => {
            var { height } = _a, style = __rest(_a, ["height"]);
            return (<web_1.animated.div className={'tab-content-inner'} key={index} style={style}>
                        <web_1.animated.div className={'tab-content-inner-1'} style={{ height }}>{items[index]}</web_1.animated.div>
                    </web_1.animated.div>);
        })}
            </div>
        </>);
};
const Page = () => {
    const active_tab = (0, react_redux_1.useSelector)((state) => state.nav.active_tab);
    return (<h1>hi</h1>);
};
exports.default = Page;
