const React = require('react');
import './Landing.css';

import { FC, ReactElement, useRef } from 'react';
import type { RootState } from '../../store';
import { Canvas } from  '@react-three/fiber';

interface LineProps {
    num: number,
}
const Line: FC<LineProps> = (props): ReactElement => {
    const evenStyle = {
        //color: "red",
        //marginLeft: '20px',
    }
    const oddStyle = {

    }
    const arr: number[] = [];
    for (let i = 0; i < 30; i++) {
        arr.push(i);
    }
    return (
        <div className="line" style={props.num % 2 === 0 ? evenStyle : {}}>
            {arr.map((index: number) => {
                return <p key={index}>bryan zack &nbsp;</p>
            })}
        </div>
    );
}
const Landing: FC = (): ReactElement => {
    const arr: number[] = [];
    for (let i = 0; i < 40; i++) {
        arr.push(i);
    }
    return (
        <>
            <div className="landing">
                <div className="sidewaystext">
                    <h1>bryan zack</h1>
                </div>
                <div className="names">
                    {arr.map((index: number) => {
                        return <Line num={index} key={index}/>
                    })}
                </div>
            </div>
        </>
    );
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