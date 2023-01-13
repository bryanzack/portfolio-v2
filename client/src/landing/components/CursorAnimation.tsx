const React = require('react');
import './CursorAnimation.css';

import { FC, ReactElement } from 'react';
import { animated, useTrail } from '@react-spring/web';
import useMeasure from 'react-use-measure';

const fast = { tension: 1200, friction: 40 };
const slow = {mass: 10, tension: 200, friction: 50 };
const transInvertedXY = (x: number, y: number) =>
    `translate3d(${window.innerWidth-x}px,${window.innerHeight-y}px,0) translate3d(-50%,-50%,0)`;
const transInvertedX = (x: number, y: number) =>
    `translate3d(${window.innerWidth-x}px,${y}px,0) translate3d(-50%,-50%,0)`;
const transInvertedY = (x: number, y: number) =>
    `translate3d(${x}px,${window.innerHeight-y}px,0) translate3d(-50%,-50%,0)`;
const trans = (x: number, y: number) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const CursorAnimation: FC = (): ReactElement => {
    const [trail, api] = useTrail(3, (i) => ({
        xy: [0,0],
        config: i === 0 ? fast : slow,
    }));
    const [ref, { left, top }] = useMeasure();

    const handleMouseMove = (e: any) => {
        api.start({ xy: [e.clientX - left, e.clientY - top]});
    }

    return (
        <>
            <div className={'cursor-animation-container-close'}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                        <feColorMatrix
                            in="blur"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                        />
                    </filter>
                </svg>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
                    ))}
                </div>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.to(transInvertedXY) }} />
                    ))}
                </div>
            </div>
            <div className={'cursor-animation-container-far'}>
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                        <feColorMatrix
                            in="blur"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                        />
                    </filter>
                </svg>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.to(transInvertedX) }} />
                    ))}
                </div>
                <div ref={ref} className={'cursor-animation-main'} onMouseMove={handleMouseMove}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.to(transInvertedY) }} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CursorAnimation;