"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require('react');
require("./ButtonNav.css");
var playerSlice_js_1 = require("../store/playerSlice.js");
var deckSlice_js_1 = require("../store/deckSlice.js");
var dealerSlice_js_1 = require("../store/dealerSlice.js");
var gameSlice_1 = require("../store/gameSlice");
var react_redux_1 = require("react-redux");
var cards_1 = require("./cards");
var ButtonNav = function () {
    var deckCards = (0, react_redux_1.useSelector)(function (state) { return state.deck.cards; });
    var topOfDeck = (0, react_redux_1.useSelector)(function (state) { return deckCards[state.deck.cards.length - 1]; });
    var isPlayerBust = (0, react_redux_1.useSelector)(function (state) { return state.player.isBust; });
    var isDealerBust = (0, react_redux_1.useSelector)(function (state) { return state.dealer.isBust; });
    var playerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards; });
    var dealerCards = (0, react_redux_1.useSelector)(function (state) { return state.dealer.cards; });
    var numPlayerCards = (0, react_redux_1.useSelector)(function (state) { return state.player.cards.length; });
    var topDeckCard = (0, react_redux_1.useSelector)(function (state) { return state.deck.topCard; });
    var dealerScore = (0, react_redux_1.useSelector)(function (state) { return state.dealer.score; });
    var playerScore = (0, react_redux_1.useSelector)(function (state) { return state.player.score; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var hitPlayer = function () {
        if (cards_1["default"][topOfDeck].val + playerScore > 21) {
            dispatch((0, gameSlice_1.determineWinner)("dealer"));
        }
        dispatch((0, playerSlice_js_1.addToPlayer)(topOfDeck));
        dispatch((0, deckSlice_js_1.removeFromDeck)(topOfDeck));
    };
    var handleStay = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tmpDealerScore, count, winner;
        return __generator(this, function (_a) {
            tmpDealerScore = dealerScore;
            count = 0;
            winner = '';
            while (tmpDealerScore < 17) {
                tmpDealerScore += cards_1["default"][deckCards[deckCards.length - 1 - count]].val;
                //hitDealer(deckCards[deckCards.length-1-count]);
                dispatch((0, dealerSlice_js_1.addToDealer)(deckCards[deckCards.length - 1 - count]));
                dispatch((0, deckSlice_js_1.removeFromDeck)(deckCards[deckCards.length - 1 - count]));
                count++;
            }
            if (tmpDealerScore > 21) {
                dispatch((0, gameSlice_1.determineWinner)('player'));
            }
            else if (tmpDealerScore < 21 && tmpDealerScore > playerScore) {
                dispatch((0, gameSlice_1.determineWinner)('dealer'));
            }
            else if (tmpDealerScore < 21 && tmpDealerScore < playerScore) {
                dispatch((0, gameSlice_1.determineWinner)('player'));
            }
            else if (tmpDealerScore === playerScore) {
                dispatch((0, gameSlice_1.determineWinner)('push'));
            }
            return [2 /*return*/];
        });
    }); };
    var removeDealer = function (count) {
        setTimeout(function () {
            //dispatch(determineWinner());
            /*
            dealerCards.forEach((card) => {
                dispatch(removeFromDealer(card));
                dispatch(addToDiscard(card));
            });
            playerCards.forEach((card) => {
                dispatch(removeFromPlayer(card));
                dispatch(addToDiscard(card));
            });
             */
        }, 3000);
    };
    var dealDealer = function (card) {
        dispatch((0, dealerSlice_js_1.addToDealer)(card));
        dispatch((0, deckSlice_js_1.removeFromDeck)(card));
    };
    var dealPlayer = function (card) {
        dispatch((0, playerSlice_js_1.addToPlayer)(card));
        dispatch((0, deckSlice_js_1.removeFromDeck)(card));
    };
    var dealHands = function () {
        dealDealer(deckCards[topOfDeck]);
        dealPlayer(deckCards[topOfDeck - 1]);
        dealPlayer(deckCards[topOfDeck - 2]);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "button-container" },
            playerCards.length === 0 &&
                React.createElement("button", { disabled: playerCards.length !== 0, onClick: function () { return (dealHands()); } }, "Play"),
            React.createElement("button", { onClick: function () { return hitPlayer(); }, disabled: playerScore > 21 }, "Hit"),
            React.createElement("button", { onClick: function () { return handleStay(); }, disabled: playerCards.length === 0 }, "Stay"))));
};
exports["default"] = ButtonNav;
