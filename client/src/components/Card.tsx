const React = require('react');
import './Card.css';
import { FC, ReactElement } from 'react';
import cards from './cards';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import type { RootState } from '../store';

export interface CardProps {
    id: number,
    isTopCard: boolean,
    pile: "deck" | "discard" | "player",
}


const Card: FC<CardProps> = (props): ReactElement => {
    const card_theme = useSelector((state: RootState) => state.card.theme);
    const sendToDiscard = useSpring({
        from: {
            x: "25vw",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)",
        },
        to: {
            x: "0vw",
            scaleX: -1,
            transform: "rotateX(180deg) rotateY(360deg)",
        },
        config: {
            mass: 1,
            tension: 300,
            friction: 20,
        }
    });
    const sendToDeck = useSpring({
        from: {
            x: "-25vw",
            scaleX: 1,
            transform: "rotateX(180deg) rotateY(0deg)",
        },
        to: {
            x: "0vw",
            scaleX: 1,
            transform: "rotateX(0deg), rotateY(0deg)",
        },
    });
    const sendToPlayer = useSpring({
        from: {
            x: "15vw",
            y: "-35vh",
            scaleX: 1,
            transform: "rotateX(0deg) rotateY(0deg)",
        },
        to: {
            x: "0vw",
            y: "0vh",
            scaleX: -1,
            transform:  "rotateX(180deg) rotateY(0deg)",
        }
    });

    return (
        <>
            <animated.div className="card-container"
                          style={props.pile == "deck" ? sendToDeck :
                                 props.pile == "discard" ? sendToDiscard : sendToPlayer}>
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