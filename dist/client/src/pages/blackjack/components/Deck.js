"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Deck.css");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const deckSlice_1 = require("../reducers/deckSlice");
const Card_js_1 = __importDefault(require("./Card.js"));
const Deck = () => {
    const deckCards = (0, react_redux_1.useSelector)((state) => state.deck.cards);
    const debug_mode = (0, react_redux_1.useSelector)((state) => state.game.debug);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleShuffle = () => {
        dispatch((0, deckSlice_1.shuffle)());
    };
    (0, react_1.useEffect)(() => {
        handleShuffle();
    }, []);
    return (<>
            <div className="deck">
                {debug_mode && deckCards.length}
                <div className="cards">
                    {deckCards.map((index) => (<Card_js_1.default pile={"deck"} key={index} id={index}/>))}
                </div>
            </div>
        </>);
};
exports.default = Deck;
