"use strict";
exports.__esModule = true;
var React = require('react');
require("./Blackjack.css");
var Deck_js_1 = require("./Deck.js");
var Discard_js_1 = require("./Discard.js");
var Blackjack = function () {
    return (React.createElement("div", { className: "blackjack" },
        React.createElement("div", { className: "top" },
            React.createElement("div", { className: "top-container" },
                React.createElement(Discard_js_1["default"], null),
                React.createElement(Deck_js_1["default"], null)))));
};
exports["default"] = Blackjack;
/*
<div className="blackjack">
    <button onClick={() => {
        setIsVisible(v => !v);
    }}>{isVisible ? 'un-mount' : 'mount'}</button>
    <div className="container">
        {transition((style, item) =>
            item ? <animated.div style={style} className="item" /> : ''
        )}
    </div>
</div>
 */ 
