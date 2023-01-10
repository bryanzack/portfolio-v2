"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Dealer.css");
const react_redux_1 = require("react-redux");
const Card_js_1 = __importDefault(require("./Card.js"));
const Dealer = () => {
    const dealerCards = (0, react_redux_1.useSelector)((state) => state.dealer.cards);
    const dealerScore = (0, react_redux_1.useSelector)((state) => state.dealer.score);
    return (<>
           <div className="dealer">
               {dealerScore}
               <div className="cards">
                  {dealerCards.map((index) => (<Card_js_1.default pile={"dealer"} key={index} id={index} from={"dealer"}/>))}
              </div>
           </div>
       </>);
};
exports.default = Dealer;
