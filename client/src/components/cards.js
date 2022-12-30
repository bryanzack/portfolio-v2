"use strict";
exports.__esModule = true;
var cards = {
    "1": {
        path: "clubs_ace",
        suite: "clubs",
        val: 1 || 11,
        name: 1
    },
    "2": {
        path: "clubs_2",
        suite: "clubs",
        val: 2,
        name: 2
    },
    "3": {
        path: "clubs_3",
        suite: "clubs",
        val: 3,
        name: 3
    },
    "4": {
        path: "clubs_4",
        suite: "clubs",
        val: 4,
        name: 4
    },
    "5": {
        path: "clubs_5",
        suite: "clubs",
        val: 5,
        name: 5
    },
    "6": {
        path: "clubs_6",
        suite: "clubs",
        val: 6,
        name: 6
    },
    "7": {
        path: "clubs_7",
        suite: "clubs",
        val: 7,
        name: 7
    },
    "8": {
        path: "clubs_8",
        suite: "clubs",
        val: 8,
        name: 8
    },
    "9": {
        path: "clubs_9",
        suite: "clubs",
        val: 9,
        name: 9
    },
    "10": {
        path: "clubs_10",
        suite: "clubs",
        val: 10,
        name: 10
    },
    "11": {
        path: "clubs_jack",
        suite: "clubs",
        val: 10,
        name: "Jack"
    },
    "12": {
        path: "clubs_queen",
        suite: "clubs",
        val: 10,
        name: "Queen"
    },
    "13": {
        path: "clubs_king",
        suite: "clubs",
        val: 10,
        name: "King"
    },
    "14": {
        path: "diamonds_ace",
        suite: "diamonds",
        val: 1 || 11,
        name: "Ace"
    },
    "15": {
        path: "diamonds_2",
        suite: "diamonds",
        val: 2,
        name: 2
    },
    "16": {
        path: "diamonds_3",
        suite: "diamonds",
        val: 3,
        name: 3
    },
    "17": {
        path: "diamonds_4",
        suite: "diamonds",
        val: 4,
        name: 4
    },
    "18": {
        path: "diamonds_5",
        suite: "diamonds",
        val: 5,
        name: 5
    },
    "19": {
        path: "diamonds_6",
        suite: "diamonds",
        val: 6,
        name: 6
    },
    "20": {
        path: "diamonds_7",
        suite: "diamonds",
        val: 7,
        name: 7
    },
    "21": {
        path: "diamonds_8",
        suite: "diamonds",
        val: 8,
        name: 8
    },
    "22": {
        path: "diamonds_9",
        suite: "diamonds",
        val: 9,
        name: 9
    },
    "23": {
        path: "diamonds_10",
        suite: "diamonds",
        val: 10,
        name: 10
    },
    "24": {
        path: "diamonds_jack",
        suite: "diamonds",
        val: 10,
        name: "Jack"
    },
    "25": {
        path: "diamonds_queen",
        suite: "diamonds",
        val: 10,
        name: "Queen"
    },
    "26": {
        path: "diamonds_king",
        suite: "diamonds",
        val: 10,
        name: "King"
    },
    "27": {
        path: "hearts_ace",
        suite: "hearts",
        val: 1 || 11,
        name: "Ace"
    },
    "28": {
        path: "hearts_2",
        suite: "hearts",
        val: 2,
        name: 2
    },
    "29": {
        path: "hearts_3",
        suite: "hearts",
        val: 3,
        name: 3
    },
    "30": {
        path: "hearts_4",
        suite: "hearts",
        val: 4,
        name: 4
    },
    "31": {
        path: "hearts_5",
        suite: "hearts",
        val: 5,
        name: 5
    },
    "32": {
        path: "hearts_6",
        suite: "hearts",
        val: 6,
        name: 6
    },
    "33": {
        path: "hearts_7",
        suite: "hearts",
        val: 7,
        name: 7
    },
    "34": {
        path: "hearts_8",
        suite: "hearts",
        val: 8,
        name: 8
    },
    "35": {
        path: "hearts_9",
        suite: "hearts",
        val: 9,
        name: 9
    },
    "36": {
        path: "hearts_10",
        suite: "hearts",
        val: 10,
        name: 10
    },
    "37": {
        path: "hearts_jack",
        suite: "hearts",
        val: 10,
        name: "Jack"
    },
    "38": {
        path: "hearts_queen",
        suite: "queen",
        val: 10,
        name: "Queen"
    },
    "39": {
        path: "hearts_king",
        suite: "king",
        val: 10,
        name: "King"
    },
    "40": {
        path: "spades_ace",
        suite: "spades",
        val: 1 || 11,
        name: "Ace"
    },
    "41": {
        path: "spades_2",
        suite: "spades",
        val: 2,
        name: 2
    },
    "42": {
        path: "spades_3",
        suite: "spades",
        val: 3,
        name: 3
    },
    "43": {
        path: "spades_4",
        suite: "spades",
        val: 4,
        name: 4
    },
    "44": {
        path: "spades_5",
        suite: "spades",
        val: 5,
        name: 5
    },
    "45": {
        path: "spades_6",
        suite: "spades",
        val: 6,
        name: 6
    },
    "46": {
        path: "spades_7",
        suite: "spades",
        val: 7,
        name: 7
    },
    "47": {
        path: "spades_8",
        suite: "spades",
        val: 8,
        name: 8
    },
    "48": {
        path: "spades_9",
        suite: "spades",
        val: 9,
        name: 9
    },
    "49": {
        path: "spades_10",
        suite: "spades",
        val: 10,
        name: 10
    },
    "50": {
        path: "spades_jack",
        suite: "spades",
        val: 10,
        name: "Jack"
    },
    "51": {
        path: "spades_queen",
        suite: "spades",
        val: 10,
        name: "Queen"
    },
    "52": {
        path: "spades_king",
        suite: "spades",
        val: 10,
        name: "King"
    }
};
exports["default"] = cards;
