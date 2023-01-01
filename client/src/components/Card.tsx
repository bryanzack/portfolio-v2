const React = require('react');
import './Card.css';
import { FC, ReactElement } from 'react';
import cards from './cards';
import { useSelector } from 'react-redux';
import { useSpring, animated, easings } from '@react-spring/web';
import type { RootState } from '../store';
import processCard from '../helpers/processCard.js';
export interface CardProps {
    id: number,
    isTopCard: boolean,
    pile: "deck" | "discard" | "player" | "dealer",
}


const Card: FC<CardProps> = (props): ReactElement => {
    const card_theme = useSelector((state: RootState) => state.card.theme);
    const sendToDiscard = useSpring({
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
    });
    const sendToDeck = useSpring({
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
    });
    const sendToPlayer = useSpring({
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
    });
    const fromDealerToDiscard = useSpring({
        from: {
            x: "0vw",
            y: "0vh",
        },
        to: {
            x: "-10vw",
            y: "0vh",
        }
    });
    const fromDeckToDealer = useSpring({
        from: {
            x: "-20vw",
            y: "-3vh",
        },
        to: {
            x: "0vw",
            y: "0vh",
        },
        config: {

        },
    });

    return (
        <>
            <animated.div className={props.pile === "player" ? "card-container-player" :
                                     props.pile === "dealer" ? "card-container-player" : "card-container"}
                          style={props.pile === "deck" ? sendToDeck :
                                 props.pile === "discard" ? sendToDiscard :
                                 props.pile === "dealer" ? fromDeckToDealer : sendToPlayer}>
                <img className="card-back"
                     src={require(`./../svg_playing_cards/fronts/png_96_dpi/${cards[props.id].path}.png`)}
                     alt={"card"}
                     height={"130px"}
                     width={"100px"} />
                <img className="card-front"
                     src={require(`./../svg_playing_cards/backs/png_96_dpi/${card_theme}.png`)}
                     alt={"card"}
                     height={"130px"}
                     width={"100px"} />
            </animated.div>
        </>
    );
}

export default Card;