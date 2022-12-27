const React = require('react');
import './Card.css';
import { FC, ReactElement } from 'react';
import cards from './cards';
import { useSpring, animated } from '@react-spring/web';
import CardBack from '../svg_playing_cards/backs/png_96_dpi/abstract.png';
export interface CardProps {
    id: number,
    isTopCard: boolean,
    pile: "deck" | "discard",
}

const Card: FC<CardProps> = (props): ReactElement => {
    const sendToDiscard = useSpring({
        from: {
            x: "25vw",
            scaleX: "1",
            transform: "rotate(0deg)",
        },
        to: {
            x: "0vw",
            scaleX: "-1",
            transform: "rotate(180deg)",
        },
    });
    const sendToDeck = useSpring({
        from: {x: "-25vw" },
        to: { x: "0vw" },
    });

    return (
        <>
            <animated.div className="card-container" style={props.pile == "deck" ? sendToDeck : sendToDiscard}>
                <img className="card-front"
                     src={require(`./../svg_playing_cards/fronts/png_96_dpi/${cards[props.id].path}.png`)}
                     alt={"card"}
                     height={"130px"}
                     width={"100px"} />
                <img className="card-back"
                     src={require('./../svg_playing_cards/backs/png_96_dpi/abstract.png')}
                     alt={"card"}
                     height={"130px"}
                     width={"100px"} />
            </animated.div>
        </>
    );
}

export default Card;