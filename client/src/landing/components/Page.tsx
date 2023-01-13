const React = require('react');
import './Page.css';

import { FC, ReactElement, ReactNode, useState, useEffect } from 'react';
import type { RootState } from "../../store";
import { useSelector } from 'react-redux';
import { animated, useSpring, useTrail } from '@react-spring/web';

interface TrailProps {
    children?: ReactNode,
    open: boolean,
}

const Trail: FC<TrailProps> = ({ open, children}) => {
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        reset: true,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <animated.div key={index} className={'trailsText'} style={style}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
                ))}
        </div>
    );
}

const Page: FC = (): ReactElement => {
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    const [open, setOpen] = useState(false);
    const about: string[] = ['PHOTOGRAPHY', 'PENNSTATE', 'WEBDEV', 'MUSIC'];
    const tech: string[] = ['TYPESCRIPT', 'REACTJS', 'REDUX', 'NODE'];
    const projects: string[] = ['DATADISPLAY', 'PORTFOLIO', 'CARDS', '...']
    useEffect(() => {
        setOpen(false);
        setTimeout(() => {
            setOpen(true);
        }, 100);
    }, [active_tab]);
    return (
        <div className={'tab-content'}>
            <div className={'container'} onClick={() => setOpen(state => !state)}>
                <Trail open={open}>
                    {active_tab === 'about' && about.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                    {active_tab === 'tech' && tech.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                    {active_tab === 'projects' && projects.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </Trail>
            </div>
        </div>
    );
}

export default Page;
