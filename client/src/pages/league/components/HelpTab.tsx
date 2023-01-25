const React = require('react');
import './HelpTab.css';

import { useState } from 'react';
import { useSpring, useTransition, animated, config } from '@react-spring/web';

const HelpTab = (): JSX.Element => {
    const [show_help, setShowHelp] = useState(true);
    /// -18vw
    const styles = useSpring({
        from: {left: show_help ? '-18vw' : '0vw'},
        to: {left: show_help ? '0vw' : '-18vw'},
        //left: show_help ? '0vw' : "-18vw",
    });
    return (
        <animated.div style={styles} className={"help-tab"}>
            <div className="help-content">

            </div>
            <div className="help-button-container">
                <div className={"help-button"} onClick={() => setShowHelp(!show_help)}>

                </div>
            </div>
        </animated.div>
    );
}

export default HelpTab;