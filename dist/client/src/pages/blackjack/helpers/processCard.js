"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromDiscardToDeck = {
    from: {
        x: "-30vw",
        scaleX: 1,
        transform: "rotateX(0deg) rotateY(0deg)",
    },
    to: {
        x: "0vw",
        scaleX: 1,
        transform: "rotateX(0deg), rotateY(0deg)",
    },
    config: {
        mass: 2,
        tension: 900,
        frequency: .6,
        damping: 1,
    }
};
const fromDeckToPlayer = {
    from: {
        x: "15vw",
        y: "-30vh",
        scaleX: 1,
        transform: "rotateX(0deg) rotateY(0deg)",
    },
    to: {
        x: "0vw",
        y: "0vh",
        scaleX: -1,
        transform: "rotateX(180deg) rotateY(360deg)",
    },
    config: {
    ///mass: 2,
    ///tension: 200,
    ///friction: 30,
    //damping: 1,
    //frequency: .5,
    }
};
const fromDeckToDealer = {
    from: {
        x: "15vw",
        y: "15vh",
        scaleX: 1,
        transform: "rotateX(0deg) rotateY(0deg)",
    },
    to: {
        x: "0vw",
        y: "0vh",
        scaleX: -1,
        transform: "rotateX(180deg) rotateY(360deg)",
    },
    config: {},
};
const fromPlayerToDiscard = {
    from: {
        x: "15vw",
        y: "35vh",
        scaleX: 1,
        transform: "rotateX(0deg) rotateY(0deg)",
    },
    to: {
        x: "0vw",
        y: "0vh",
        scaleX: -1,
        transform: "rotateX(180deg) rotateY(180deg)",
    },
    config: {
        mass: 1,
        //tension: 400,
        //friction: 50,
        //damping: 1,
        //frequency: .5,
    }
};
const fromDealerToDiscard = {
    from: {
        x: "15vw",
        y: "10vh",
        scaleX: 1,
        transform: "rotateX(0deg) rotateY(0deg)",
    },
    to: {
        x: "0vw",
        y: "0vh",
        scaleX: -1,
        transform: "rotateX(180deg) rotateY(180deg)",
    },
    config: {
        mass: 1,
        //tension: 400,
        //friction: 50,
        //damping: 1,
        //frequency: .5,
    }
};
const processCard = (pile, from) => {
    switch (pile) {
        case "deck":
            return fromDiscardToDeck;
        case "player":
            return fromDeckToPlayer;
        case "dealer":
            return fromDeckToDealer;
        case "discard":
            return from === "player"
                ? fromPlayerToDiscard
                : fromDealerToDiscard;
        default:
            return fromPlayerToDiscard;
    }
};
exports.default = processCard;
