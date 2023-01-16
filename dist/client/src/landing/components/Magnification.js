"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Magnification.css");
const fiber_1 = require("@react-three/fiber");
const Magnification = () => {
    return (<>
            <div className={"magnification"}>
                <fiber_1.Canvas>
                    <ambientLight intensity={0.1}/>
                    <directionalLight color={"red"} position={[0, -10, 5]}/>
                    <mesh>
                        <sphereGeometry args={[2, 16, 32]}/>
                        <meshStandardMaterial />
                    </mesh>
                </fiber_1.Canvas>
            </div>
        </>);
};
exports.default = Magnification;
