const React = require('react');
import './Landing.css';


import { FC, ReactElement, useRef, useState } from 'react';
import type { RootState } from '../../store';
import { Canvas, useFrame } from  '@react-three/fiber';
import { Mesh } from 'three';
import { animated, useTransition, useTrail } from '@react-spring/web';
import Marquee from 'react-fast-marquee';
import Names from './Names.js';

interface TrailProps<T> {
    open: boolean,
    itemsList: T[],
}
const Trail: FC<TrailProps<any>> = (TrailProps) => {
    const items = React.Children.toArray(TrailProps.itemsList)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: TrailProps.open ? 1 : 0,
        x: TrailProps.open ? 0 : 20,
        height: TrailProps.open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <animated.div key={index} className={"trailsText"} style={style}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </div>
    )
}

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
                <div className="hero">
                    <h1>about me</h1>
                </div>
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