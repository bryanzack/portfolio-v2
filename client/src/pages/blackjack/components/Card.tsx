const React = require('react');
import './Card.css';

import { FC, ReactElement } from 'react';
import cards from '../helpers/cards';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import type { RootState } from '../../../store';
import processCard from '../helpers/processCard.js';

export interface CardProps {
    id: number,
    pile: "deck" | "discard" | "player" | "dealer",
    from?: any,
}

const Card: FC<CardProps> = (props): ReactElement => {
    const card_theme = useSelector((state: RootState) => state.card.theme);

    return (
        <>
            <animated.div className={(props.pile === "player" || props.pile === "dealer") ? "card-container-hand" : "card-container"}
                          style={useSpring(processCard(props.pile, props.from))}>
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