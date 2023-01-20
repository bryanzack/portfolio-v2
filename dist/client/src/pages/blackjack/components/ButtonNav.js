"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./ButtonNav.css");
const hooks_1 = require("../../../store/hooks");
const deckSlice_js_1 = require("../reducers/deckSlice.js");
const playerSlice_js_1 = require("../reducers/playerSlice.js");
const deckSlice_js_2 = require("../reducers/deckSlice.js");
const dealerSlice_js_1 = require("../reducers/dealerSlice.js");
const discardSlice_js_1 = require("../reducers/discardSlice.js");
const gameSlice_js_1 = require("../reducers/gameSlice.js");
const react_redux_1 = require("react-redux");
const cards_1 = __importDefault(require("../helpers/cards"));
let ButtonNav = () => {
    const debug_mode = (0, react_redux_1.useSelector)((state) => state.game.debug);
    const dealerCards = (0, react_redux_1.useSelector)((state) => state.dealer.cards);
    const deckCards = (0, react_redux_1.useSelector)((state) => state.deck.cards);
    const discardCards = (0, react_redux_1.useSelector)((state) => state.discard.cards);
    const playerCards = (0, react_redux_1.useSelector)((state) => state.player.cards);
    const dealerScore = (0, react_redux_1.useSelector)((state) => state.dealer.score);
    const playerScore = (0, react_redux_1.useSelector)((state) => state.player.score);
    const winner = (0, react_redux_1.useSelector)((state) => state.game.didSomeoneWin);
    const isDeckRepopulating = (0, react_redux_1.useSelector)((state) => state.game.repopulating);
    const dispatch = (0, hooks_1.useAppDispatch)();
    // if player hits and deck is not empty, hit as normal
    // else if deck is empty, repopulate deck with discard, and deal from top of new deck state
    const hitPlayerThunk = () => (dispatch, getState) => {
        const originalState = (0, deckSlice_js_1.selectCards)(getState());
        if (originalState.length !== 0) {
            if (cards_1.default[originalState[originalState.length - 1]].val + playerScore > 21) {
                dispatch((0, gameSlice_js_1.determineWinner)("dealer"));
            }
            dispatch((0, playerSlice_js_1.addToPlayer)(originalState[originalState.length - 1]));
            dispatch((0, deckSlice_js_2.removeFromDeck)(originalState[originalState.length - 1]));
        }
        else {
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach((card) => {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            const newState = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(() => {
                if (cards_1.default[newState[newState.length - 1]].val + playerScore > 21) {
                    dispatch((0, gameSlice_js_1.determineWinner)("dealer"));
                }
                dispatch((0, playerSlice_js_1.addToPlayer)(newState[newState.length - 1]));
                dispatch((0, deckSlice_js_2.removeFromDeck)(newState[newState.length - 1]));
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    };
    const newHandleStayThunk = () => (dispatch, getState) => {
        // given current deck state, how many cards can be dealt to the dealer
        // before dealer busts or reaches dealerScore > = 17?
        const originalDeck = (0, deckSlice_js_1.selectCards)(getState());
        let tmpDealerScore = dealerScore;
        let count = 0;
        if (originalDeck.length >= 7) {
            while (tmpDealerScore < 17) {
                tmpDealerScore += cards_1.default[originalDeck[originalDeck.length - 1 - count]].val;
                dispatch((0, dealerSlice_js_1.addToDealer)(originalDeck[originalDeck.length - 1 - count]));
                dispatch((0, deckSlice_js_2.removeFromDeck)(originalDeck[originalDeck.length - 1 - count]));
                count++;
            }
            if (tmpDealerScore > 21) {
                dispatch((0, gameSlice_js_1.determineWinner)('player'));
            }
            else if (tmpDealerScore <= 21 && tmpDealerScore > playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('dealer'));
            }
            else if (tmpDealerScore <= 21 && tmpDealerScore < playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('player'));
            }
            else if (tmpDealerScore === playerScore) {
                dispatch((0, gameSlice_js_1.determineWinner)('push'));
            }
        }
        else {
            console.log("not enough cards for stay operation...");
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach((card) => {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            const newDeck = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(() => {
                while (tmpDealerScore < 17) {
                    tmpDealerScore += cards_1.default[newDeck[newDeck.length - 1 - count]].val;
                    dispatch((0, dealerSlice_js_1.addToDealer)(newDeck[newDeck.length - 1 - count]));
                    dispatch((0, deckSlice_js_2.removeFromDeck)(newDeck[newDeck.length - 1 - count]));
                    count++;
                }
                if (tmpDealerScore > 21) {
                    dispatch((0, gameSlice_js_1.determineWinner)('player'));
                }
                else if (tmpDealerScore <= 21 && tmpDealerScore > playerScore) {
                    dispatch((0, gameSlice_js_1.determineWinner)('dealer'));
                }
                else if (tmpDealerScore <= 21 && tmpDealerScore < playerScore) {
                    dispatch((0, gameSlice_js_1.determineWinner)('player'));
                }
                else if (tmpDealerScore === playerScore) {
                    dispatch((0, gameSlice_js_1.determineWinner)('push'));
                }
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    };
    const dealDealer = (card) => {
        dispatch((0, dealerSlice_js_1.addToDealer)(card));
        dispatch((0, deckSlice_js_2.removeFromDeck)(card));
    };
    const dealPlayer = (card) => {
        dispatch((0, playerSlice_js_1.addToPlayer)(card));
        dispatch((0, deckSlice_js_2.removeFromDeck)(card));
    };
    const dealHandsThunk = () => (dispatch, getState) => {
        const originalDeck = (0, deckSlice_js_1.selectCards)(getState());
        if (originalDeck.length > 2) {
            dealDealer(deckCards[deckCards.length - 1]);
            dealPlayer(deckCards[deckCards.length - 2]);
            dealPlayer(deckCards[deckCards.length - 3]);
        }
        else {
            dispatch((0, gameSlice_js_1.toggleRepopulating)(true));
            discardCards.forEach((card) => {
                dispatch((0, discardSlice_js_1.removeFromDiscard)(card));
                dispatch((0, deckSlice_js_2.addToDeck)(card));
            });
            const newDeck = (0, deckSlice_js_1.selectCards)(getState());
            setTimeout(() => {
                dealDealer(newDeck[newDeck.length - 1]);
                dealPlayer(newDeck[newDeck.length - 2]);
                dealPlayer(newDeck[newDeck.length - 3]);
            }, 500);
            dispatch((0, gameSlice_js_1.toggleRepopulating)(false));
        }
    };
    return (<>
            <div className="button-container">
                {debug_mode && `# cards in ecosystem: ${deckCards.length + discardCards.length + playerCards.length + dealerCards.length}`}
                <div className="play-button">
                    {playerCards.length === 0 &&
            <button disabled={isDeckRepopulating} onClick={() => dispatch(dealHandsThunk())}>
                            Play
                        </button>}
                </div>
                <div className={(playerScore > 0) ? "deal-buttons-active" : "deal-buttons-empty"}>
                    <button onClick={() => dispatch(hitPlayerThunk())} disabled={winner}>
                        Hit
                    </button>
                    <button onClick={() => dispatch(newHandleStayThunk())} disabled={winner}>
                        Stay
                    </button>
                </div>
                <div className={"toggle-buttons"}>
                    <button onClick={() => dispatch((0, gameSlice_js_1.toggleDebug)())}>
                        debug
                    </button>
                </div>
            </div>
        </>);
};
exports.default = ButtonNav;
