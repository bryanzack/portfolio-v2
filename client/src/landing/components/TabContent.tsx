import {isContentEditable} from "@testing-library/user-event/dist/utils";

const React = require('react');
import './TabContent.css';

import {FC, ReactElement, ReactNode} from 'react';
import type { RootState } from "../../store";
import { useSelector } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';

interface ContentProps {
    children?: React.ReactNode;
}

const About: FC<ContentProps> = ({ children }): ReactElement => {
    const items = React.Children.toArray(children);
    return (
        <div className={"tab-content"}>
            {items.map((item: ReactNode, index: number) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
const Tech: FC = (): ReactElement => {
    return (
        <div className={"tab-content"}>
            <h1>Tech</h1>
        </div>
    );
}
const Projects: FC = (): ReactElement => {
    return (
        <div className={"tab-content"}>
            <h1>Projects</h1>
        </div>
    );
}

const TabContent: FC = (): ReactElement => {
    const active_tab = useSelector((state: RootState) => state.nav.active_tab);
    switch (active_tab) {
        case 'about':
            return (
                <About>
                        <h1>PENN STATE</h1>
                        <h1>MUSIC ENTHUSIAST</h1>
                        <h1>WEB DEVELOPER</h1>
                </About>
            );
        case 'tech':
            return (<Tech />);
        case 'projects':
            return (<Projects />);
    }
    return (
        <div className={"tab-content"}>
            <h1>About</h1>
        </div>
    ) ;
}

export default TabContent;
