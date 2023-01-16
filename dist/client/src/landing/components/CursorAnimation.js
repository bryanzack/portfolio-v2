"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./CursorAnimation.css");
const web_1 = require("@react-spring/web");
const react_use_measure_1 = __importDefault(require("react-use-measure"));
const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const transInvertedXY = (x, y) => `translate3d(${window.innerWidth - x}px,${window.innerHeight - y}px,0) translate3d(-50%,-50%,0)`;
const transInvertedX = (x, y) => `translate3d(${window.innerWidth - x}px,${y}px,0) translate3d(-50%,-50%,0)`;
const transInvertedY = (x, y) => `translate3d(${x}px,${window.innerHeight - y}px,0) translate3d(-50%,-50%,0)`;
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
const CursorAnimation = () => {
    const [trail, api] = (0, web_1.useTrail)(3, (i) => ({
        xy: [580, 600],
        config: i === 0 ? fast : slow,
    }));
    const [ref, { left, top }] = (0, react_use_measure_1.default)();
    const handleMouseMove = (e) => {
        api.start({ xy: [e.clientX - left, e.clientY - top] });
    };
    return (<>
            <div className={'cursor-animation-container-far'}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30"/>
                        <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"/>
                    </filter>
                </svg>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (<web_1.animated.div key={index} style={{ transform: props.xy.to(trans) }}/>))}
                </div>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (<web_1.animated.div key={index} style={{ transform: props.xy.to(transInvertedXY) }}/>))}
                </div>
            </div>
            <div className={'cursor-animation-container-close'}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30"/>
                        <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"/>
                    </filter>
                </svg>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (<web_1.animated.div key={index} style={{ transform: props.xy.to(transInvertedX) }}/>))}
                </div>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (<web_1.animated.div key={index} style={{ transform: props.xy.to(transInvertedY) }}/>))}
                </div>
            </div>
        </>);
};
exports.default = CursorAnimation;
