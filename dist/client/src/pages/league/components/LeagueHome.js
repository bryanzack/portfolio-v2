"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./LeagueHome.css");
const SearchBar_1 = __importDefault(require("./SearchBar"));
const LeagueHome = () => {
    return (<>
          <SearchBar_1.default />
          <h1>HOME!</h1>
       </>);
};
exports.default = LeagueHome;
