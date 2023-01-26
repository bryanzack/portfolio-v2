const React = require('react');
import './HelpTab.css';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSpring, useTransition, animated, config } from '@react-spring/web';

const HelpTab = (): JSX.Element => {
    const navigate = useNavigate();
    const [show_help, setShowHelp] = useState(true);
    /// -18vw
    const help_tab = useSpring({
        from: {
            left: show_help ? '-18vw' : '0vw',
        },
        to: {
            left: show_help ? '0vw' : '-18vw',
        },
    });
    const text_style = useSpring({
        from: {
            opacity: show_help ? 0 : 1,
        },
        to: {
            opacity: show_help ? 1 : 0,
        }
    })
    return (
        <>
            <animated.div style={help_tab} className={"help-tab"} onClick={() => setShowHelp(!show_help)}>
                <div className="help-content">
                    <animated.div style={text_style} className="help-content-inner">
                        <h1>What does this do</h1>
                        <ul>
                            <li>This page lets you play <a className="info-link" target={"_blank"} href={"https://en.wikipedia.org/wiki/Blackjack"}>Blackjack</a>.</li>
                        </ul>
                        <h1>How does it work</h1>
                        <ul>
                            <li>The object of the game is to win money by creating card totals higher than those of the dealer's hand but not exceeding 21, or by stopping at a total in the hope that the dealer will bust.</li>
                        </ul>
                        <h1>Why did I make this</h1>
                        <ul>
                            <li>I made this to learn more about state management and global state machines like Redux are useful.</li>
                        </ul>
                        <h1>What tools did I use</h1>
                        <ul>
                            <li>Redux Toolkit</li>
                            <li>React</li>
                        </ul>
                    </animated.div>
                </div>
            </animated.div>
            <div className={"home-nav"} onClick={() => navigate('/')}>

            </div>
        </>
    );
}

export default HelpTab;