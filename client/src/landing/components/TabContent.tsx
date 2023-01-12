const React = require('react');
import './TabContent.css';

import { FC, ReactElement } from 'react';
import type { RootState } from "../../store";
import { useSelector } from 'react-redux';

const About: FC = (): ReactElement => {
    return (
        <div className={"tab-content"}>
            <h1>About</h1>
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
            return (<About />);
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