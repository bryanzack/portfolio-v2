"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_1 = require("@react-spring/web");
const React = require('react');
const react_1 = require("react");
const Line = (props) => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(i);
    }
    return (<div className="line">
            {arr.map((index) => {
            return <p key={index}>bryan zack &nbsp;</p>;
        })}
        </div>);
};
const Names = () => {
    const [mouseHover, setMouseHover] = (0, react_1.useState)(false);
    const [isClicked, setClicked] = (0, react_1.useState)(false);
    const arr = [];
    for (let i = 0; i < 30; i++) {
        arr.push(i);
    }
    const active = {
        opacity: 1,
        transition: 'opacity 500ms',
    };
    const inactive = {
        opacity: 0,
        transition: 'opacity 500ms',
    };
    return (<>
            <web_1.animated.div className="names-container">
                <div className={'names'} onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                    {arr.map((index) => {
            return <Line num={index} key={index}/>;
        })}
                </div>

                <div style={active} className="background">
                    <div className="hard-background">
                    </div>
                </div>


            </web_1.animated.div>
        </>);
};
exports.default = Names;
