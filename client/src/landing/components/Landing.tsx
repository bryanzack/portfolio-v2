const React = require('react');
import './Landing.css';


import { FC, ReactElement, useRef, useState } from 'react';
import type { RootState } from '../../store';
import { Canvas, useFrame } from  '@react-three/fiber';
import { Mesh } from 'three';
import { animated, useTransition, useTrail } from '@react-spring/web';
import Marquee from 'react-fast-marquee';
import Names from './Names.js';
import Nav from './Nav.js';
import TabContent from './TabContent';

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
                <div className="sidewaystext">
                        {arr.map((index: number) => {
                            return <h1 key={index}>bryan zack</h1>
                        })}
                </div>
                <Names />
                <Nav />
                <TabContent />
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