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
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const web_1 = require("@react-spring/web");
const react_router_dom_1 = require("react-router-dom");
const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = (0, web_1.useTrail)(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        reset: true,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (<>
            {trail.map((_a, index) => {
            var { height } = _a, style = __rest(_a, ["height"]);
            return (<web_1.animated.div key={index} className={'trailsText'} style={style}>
                    <web_1.animated.div style={{ height }}>{items[index]}</web_1.animated.div>
                </web_1.animated.div>);
        })}
        </>);
};
const Page = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const active_tab = (0, react_redux_1.useSelector)((state) => state.nav.active_tab);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [hover, setHover] = (0, react_1.useState)("");
    const about = ['PHOTOGRAPHY', 'PENNSTATE', 'WEBDEV', 'MUSIC'];
    const tech = ['TYPESCRIPT', 'REACTJS', 'REDUX', 'NODE'];
    const projects = ['DATADISPLAY', 'PORTFOLIO', 'CARDS', '...'];
    const handleClick = (item) => {
        switch (item.toLowerCase()) {
            case 'cards':
                console.log("send user to card game selection");
                navigate("/blackjack");
                break;
            case '...':
                console.log("send user to github");
                // @ts-ignore
                window.open('https://github.com/bryanzack', '_blank').focus();
                break;
            case 'datadisplay':
                console.log("send user to league project");
                navigate("/league");
                break;
            default:
                console.log("clicked: " + item);
        }
    };
    (0, react_1.useEffect)(() => {
        setOpen(false);
        setTimeout(() => {
            setOpen(true);
        }, 100);
    }, [active_tab]);
    return (<>
            <div className={'tab-content'}>
                <div className={'container'}>
                    <Trail open={open}>
                        {active_tab === 'about' && about.map((item, index) => (<span onClick={() => handleClick(item)} key={index}>{item}</span>))}
                        {active_tab === 'tech' && tech.map((item, index) => (<span onClick={() => handleClick(item)} key={index}>{item}</span>))}
                        {active_tab === 'projects' && projects.map((item, index) => (<span onClick={() => handleClick(item)} key={index}>{item}</span>))}
                    </Trail>
                </div>
            </div>
            <div className={"tab-content-2"}>
            </div>
            <div className={"tab-content-3"}>
            </div>
        </>);
};
exports.default = Page;
