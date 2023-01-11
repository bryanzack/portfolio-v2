const React = require('react');
import './TabContent.css';

import { FC, ReactElement } from 'react';
import type { RootState } from "../../store";

const TabContent: FC = (): ReactElement => {
    return (
        <div className={"tab-content"}>
            <h1>About</h1>
        </div>
    ) ;
}

export default TabContent;