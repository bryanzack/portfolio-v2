"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Landing.css");
const web_1 = require("@react-spring/web");
const Nav_js_1 = __importDefault(require("./Nav.js"));
const Page_1 = __importDefault(require("./Page"));
const CursorAnimation_1 = __importDefault(require("./CursorAnimation"));
const Landing = () => {
    const fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    let arr = [];
    for (let i = 0; i < 150; i++) {
        arr.push(i);
    }
    return fadeIn((style) => (<>
            <web_1.animated.div style={style} className="landing">
                <div className="sidewaystext">
                        {arr.map((index) => {
            return <h1 key={index}>bryan zack</h1>;
        })}
                </div>
                <Nav_js_1.default />
                <Page_1.default />
                <CursorAnimation_1.default />
            </web_1.animated.div>
        </>));
};
exports.default = Landing;
/*

            <div className="three">
                <Canvas>
                    <hemisphereLight args={["blue", "red", .7]} />
                    <directionalLight position={[5,5,2]} intensity={.4}  />
                    <RotateSphere />
                </Canvas>
            </div>
 */ 
