import {animated, useSpring} from "@react-spring/web";

const React = require('react');
import { FC, ReactElement, useState, useEffect } from 'react';

interface LineProps {
    num: number,
}

const Line: FC<LineProps> = (props): ReactElement => {
    const arr: number[] = [];
    for (let i = 0; i < 20; i++) {
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
    for (let i = 0; i < 30; i++) {
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


    return (
        <>
            <animated.div className="names-container">
                <div className={'names'} onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                    {arr.map((index: number) => {
                        return <Line num={index} key={index}/>
                    })}
                </div>

                <div style={active} className="background">
                    <div className="hard-background">
                    </div>
                </div>


            </animated.div>
        </>
    );
}

export default Names;