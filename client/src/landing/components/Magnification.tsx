const React = require('react');
import './Magnification.css';

import { FC, ReactElement } from 'react';
import { Canvas } from '@react-three/fiber';

const Magnification: FC = (): ReactElement => {
    return (
        <>
            <div className={"magnification"}>
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color={"red"} position={[0,-10,5]} />
                    <mesh>
                        <sphereGeometry args={[2,16,32]}/>
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
            </div>
        </>
    );
}

export default Magnification;