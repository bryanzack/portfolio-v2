"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./League.css");
const web_1 = require("@react-spring/web");
const react_redux_1 = require("react-redux");
const SearchBar_1 = __importDefault(require("./SearchBar"));
const Matches_1 = __importDefault(require("./Matches"));
const League = () => {
    const has_submitted = (0, react_redux_1.useSelector)((state) => state.league.has_submitted);
    const fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    return fadeIn((style) => (<web_1.animated.div style={style} className="league">
            <SearchBar_1.default />
           {has_submitted && <Matches_1.default />}
       </web_1.animated.div>));
};
exports.default = League;
