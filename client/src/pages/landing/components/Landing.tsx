const React = require('react');
import './Landing.css';


import { FC, ReactElement, useRef, useState } from 'react';
import { animated, useTransition, useTrail } from '@react-spring/web';
import Nav from './Nav.js';
import Page from './Page';
import CursorAnimation from './CursorAnimation';
import BryanZack from "./BryanZack";

const Landing: FC = (): ReactElement => {
    const fadeIn = useTransition(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    let arr: number[] = [];
    for (let i = 0; i < 150; i++) {
        arr.push(i);
    }

    return fadeIn((style) => (
        <>
            <animated.div style={style} className="landing">
                <BryanZack />
                <Nav />
                <Page />
                <CursorAnimation />
            </animated.div>
        </>
    ));
}

export default Landing;


/*

            <div className="three">
                <Canvas>
                    <hemisphereLight args={["blue", "red", .7]} />
                    <directionalLight position={[5,5,2]} intensity={.4}  />
                    <RotateSphere />
                </Canvas>
            </div>
 */