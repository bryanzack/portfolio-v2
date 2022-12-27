interface Card {
    path: string,
    suite: string,
    data: number,
}

interface CardList {
    [key: number]: Card,
}

const cards: CardList = {
    "1": {
        path: "clubs_ace",
        suite: "clubs",
        data: 1 || 11,
    },
    "2": {
        path: "clubs_2",
        suite: "clubs",
        data: 2,
    },
    "3": {
        path: "clubs_3",
        suite: "clubs",
        data: 3,
    },
    "4": {
        path: "clubs_4",
        suite: "clubs",
        data: 4,
    },
    "5": {
        path: "clubs_5",
        suite: "clubs",
        data: 5,
    },
    "6": {
        path: "clubs_6",
        suite: "clubs",
        data: 6,
    },
    "7": {
        path: "clubs_7",
        suite: "clubs",
        data: 7,
    },
    "8": {
        path: "clubs_8",
        suite: "clubs",
        data: 8,
    },
    "9": {
        path: "clubs_9",
        suite: "clubs",
        data: 9,
    },
    "10": {
        path: "clubs_10",
        suite: "clubs",
        data: 10,
    },
    "11": {
        path: "clubs_jack",
        suite: "clubs",
        data: 10,
    },
    "12": {
        path: "clubs_queen",
        suite: "clubs",
        data: 10,
    },
    "13": {
        path: "clubs_king",
        suite: "clubs",
        data: 10,
    },
    "14": {
        path: "diamonds_ace",
        suite: "diamonds",
        data: 1 || 11,
    },
    "15": {
        path: "diamonds_2",
        suite: "diamonds",
        data: 2,
    },
    "16": {
        path: "diamonds_3",
        suite: "diamonds",
        data: 3,
    },
    "17": {
        path: "diamonds_4",
        suite: "diamonds",
        data: 4,
    },
    "18": {
        path: "diamonds_5",
        suite: "diamonds",
        data: 5,
    },
    "19": {
        path: "diamonds_6",
        suite: "diamonds",
        data: 6,
    },
    "20": {
        path: "diamonds_7",
        suite: "diamonds",
        data: 7,
    },
    "21": {
        path: "diamonds_8",
        suite: "diamonds",
        data: 8,
    },
    "22": {
        path: "diamonds_9",
        suite: "diamonds",
        data: 9,
    },
    "23": {
        path: "diamonds_10",
        suite: "diamonds",
        data: 10,
    },
    "24": {
        path: "diamonds_jack",
        suite: "diamonds",
        data: 10,
    },
    "25": {
        path: "diamonds_queen",
        suite: "diamonds",
        data: 10,
    },
    "26": {
        path: "diamonds_king",
        suite: "diamonds",
        data: 10,
    },
    "27": {
        path: "hearts_ace",
        suite: "hearts",
        data: 1 || 11,
    },
    "28": {
        path: "hearts_2",
        suite: "hearts",
        data: 2,
    },
    "29": {
        path: "hearts_3",
        suite: "hearts",
        data: 3,
    },
    "30": {
        path: "hearts_4",
        suite: "hearts",
        data: 4,
    },
    "31": {
        path: "hearts_5",
        suite: "hearts",
        data: 5,
    },
    "32": {
        path: "hearts_6",
        suite: "hearts",
        data: 6,
    },
    "33": {
        path: "hearts_7",
        suite: "hearts",
        data: 7,
    },
    "34": {
        path: "hearts_8",
        suite: "hearts",
        data: 8,
    },
    "35": {
        path: "hearts_9",
        suite: "hearts",
        data: 9,
    },
    "36": {
        path: "hearts_10",
        suite: "hearts",
        data: 10,
    },
    "37": {
        path: "hearts_jack",
        suite: "hearts",
        data: 10,
    },
    "38": {
        path: "hearts_queen",
        suite: "queen",
        data: 10,
    },
    "39": {
        path: "hearts_king",
        suite: "king",
        data: 10,
    },
    "40": {
        path: "spades_ace",
        suite: "spades",
        data: 1 || 11,
    },
    "41": {
        path: "spades_2",
        suite: "spades",
        data: 2,
    },
    "42": {
        path: "spades_3",
        suite: "spades",
        data: 3,
    },
    "43": {
        path: "spades_4",
        suite: "spades",
        data: 4,
    },
    "44": {
        path: "spades_5",
        suite: "spades",
        data: 5,
    },
    "45": {
        path: "spades_6",
        suite: "spades",
        data: 6,
    },
    "46": {
        path: "spades_7",
        suite: "spades",
        data: 7,
    },
    "47": {
        path: "spades_8",
        suite: "spades",
        data: 8,
    },
    "48": {
        path: "spades_9",
        suite: "spades",
        data: 9,
    },
    "49": {
        path: "spades_10",
        suite: "spades",
        data: 10,
    },
    "50": {
        path: "spades_jack",
        suite: "spades",
        data: 10,
    },
    "51": {
        path: "spades_queen",
        suite: "spades",
        data: 10,
    },
    "52": {
        path: "spades_king",
        suite: "spades",
        data: 10
    },
}

export default cards;