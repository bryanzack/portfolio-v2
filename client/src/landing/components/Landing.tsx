const React = require('react');
import './Landing.css';

import { FC, ReactElement, useRef, useState } from 'react';
import type { RootState } from '../../store';
import { Canvas, useFrame } from  '@react-three/fiber';
import { Mesh } from 'three';
import { animated, useTransition, useSpring } from '@react-spring/web';

interface LineProps {
    num: number,
}

const TestBox: FC = (): ReactElement => {
    const myMesh = useRef<Mesh>(null!);
    useFrame(({ clock }) => {
        myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    });
    return (
        <mesh
            ref={myMesh}
            onClick={(e) => console.log("Test!")}
            onPointerMissed={() => console.log("miss!")}>
            <boxGeometry />
            <meshBasicMaterial color={'royalblue'} />
        </mesh>
    );
}
const Line: FC<LineProps> = (props): ReactElement => {
    const arr: number[] = [];
    for (let i = 0; i < 30; i++) {
        arr.push(i);
    }
    return (
        <div className="line">
            {arr.map((index: number) => {
                return <p key={index}>bryan zack &nbsp;</p>
            })}
        </div>
    );
}

const Names: FC = (): ReactElement => {
    const [mouseHover, setMouseHover] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const arr: number[] = [];
    for (let i = 0; i < 40; i++) {
        arr.push(i);
    }
    const active = {
        opacity: 1,
        transition: 'opacity 500ms',
    }
    const inactive = {
        opacity: 0,
        transition: 'opacity 500ms',
    }

    const clicked = {
       border: '2px solid black',
    }
    const notclicked = {
       border: 'none',
    }

    return (
        <>
            <animated.div className="names-container">
                <div className={'names'} onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                    {arr.map((index: number) => {
                        return <Line num={index} key={index}/>
                    })}
                </div>
                <div style={mouseHover ? active : inactive} className="background">
                </div>
            </animated.div>
        </>
    );
}

const Landing: FC = (): ReactElement => {
    const fadeIn = useTransition(null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return fadeIn((style) => (
        <>
            <animated.div style={style} className="landing">
                <div className="sidewaystext">
                    <h1>bryan zack</h1>
                </div>
                <Names />
            </animated.div>
        </>
    ));
}

export default Landing;


/*

            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color={"red"} position={[0,0,5]} />
                <mesh>
                    <boxGeometry args={[2,2,2]}/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
 */