"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./LeagueRoute.css");
const react_router_1 = require("react-router");
const web_1 = require("@react-spring/web");
const react_redux_1 = require("react-redux");
const SearchBar_1 = __importDefault(require("./SearchBar"));
const Matches_1 = __importDefault(require("./Matches"));
const LeagueRoute = () => {
    const search_params = (0, react_redux_1.useSelector)((state) => state.league.search_params);
    const { region, name } = (0, react_router_1.useParams)();
    const fadeIn = (0, web_1.useTransition)(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    return fadeIn((style) => (<web_1.animated.div style={style} className="league">
            <div className="league-container">
                <SearchBar_1.default />
                {region && <Matches_1.default args={{ region: region, name: name }}/>}
                {!region && <Matches_1.default args={{ region: search_params.selected_region, name: search_params.user_input }}/>}
            </div>
        </web_1.animated.div>));
};
exports.default = LeagueRoute;
