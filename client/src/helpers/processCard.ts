import {AnimatedProps} from "react-spring";

const processCard = (isPlayerBust: boolean): AnimatedProps<any> => {
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
    }
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
    }
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
            transform:  "rotateX(180deg) rotateY(360deg)",
        },
        config: {
            mass: 2,
            tension: 200,
            friction: 30,
            //damping: 1,
            //frequency: .5,
        }
    }

    return fromPlayerToDiscard;
}

export default processCard;