"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Landing.css");
const react_fast_marquee_1 = __importDefault(require("react-fast-marquee"));
const Landing = () => {
    return (<div className="landing">
            <react_fast_marquee_1.default>
                bryan zack
            </react_fast_marquee_1.default>
        </div>);
};
exports.default = Landing;
