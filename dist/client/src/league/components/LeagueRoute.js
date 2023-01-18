"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./LeagueRoute.css");
const react_router_1 = require("react-router");
const web_1 = require("@react-spring/web");
const SearchBar_1 = __importDefault(require("./SearchBar"));
const Matches_1 = __importDefault(require("./Matches"));
const LeagueRoute = () => {
    let { region, name } = (0, react_router_1.useParams)();
    //const search_params = useSelector((state: RootState) => state.league.search_params);
    const fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    return fadeIn((style) => (<web_1.animated.div style={style} className="league">
            <div className="league-container">
                <SearchBar_1.default />
                <Matches_1.default args={{ region: region, name: name }}/>
            </div>
        </web_1.animated.div>));
};
exports.default = LeagueRoute;
oute;
