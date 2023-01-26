const React = require('react');
import './BryanZack.css';

import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

const BryanZack = (): JSX.Element => {
    const [is_hover, setHover] = useState(false);
    const resume_spring = useSpring({
        to: {
            y: is_hover ? -65 : 0,
        }
    });
    const name_spring = useSpring({
        to: { opacity: is_hover ? 0 : 1},
        config: {
            duration: 100,
        }
    });
    const download_spring = useSpring({
        to: {opacity: is_hover ? 1 : 0 },
        config: {
            duration: 100,
        }
    });
    return (
        <animated.div className="bryan-zack" style={resume_spring} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
            <animated.h1 style={name_spring} className={"my-name"}>bryan zack</animated.h1>
            <a className="resume-link" href={require('../static/resume.pdf')} target={"_blank"}>
                <animated.div style={download_spring} className={"resume"}>
                    <h1>resume</h1>
                    <img className={"download-icon"} src={require('../static/images/download.png')} alt={"download"} width={"35"} height={"35"}/>
                </animated.div>
            </a>
        </animated.div>
    );
}

export default BryanZack;