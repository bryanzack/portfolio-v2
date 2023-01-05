const React = require('react');
import './Popup.css';

import { RootState } from "../store";
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';

const Popup = ( style: any, closePopup: any ) => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const transitions = useTransition(winner, {
        from: {
            scale: "150%",
            opacity: 0,
        },
        enter: {
            scale: "100%",
            opacity: 1,
        },
        leave: {
            scale: "150%",
            opacity: 0,
        },
        config: {
            duration: 300,
        }
    });
    return transitions((style) => (
        <animated.div style={style} className={"popup"}>
            <h3 className={"popup-title"}>{winner === "player" ? "You win!" : "You Lose!"}</h3>
            <p className={"popup-content"}>content</p>
            <button className={"popup-close-button"}>
                close
            </button>
        </animated.div>
    ));
};

export default Popup;