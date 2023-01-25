const React = require('react');
import './HelpTab.css';

import { useState } from 'react';
import { useSpring, useTransition, animated, config } from '@react-spring/web';

const HelpTab = (): JSX.Element => {
    const [show_help, setShowHelp] = useState(true);
    /// -18vw
    const help_tab = useSpring({
        from: {
            left: show_help ? '-18vw' : '0vw',
        },
        to: {
            left: show_help ? '0vw' : '-18vw',
        },
    });
    const text_style = useSpring({
        from: {
            opacity: show_help ? 0 : 1,
        },
        to: {
            opacity: show_help ? 1 : 0,
        }
    })
    return (
        <animated.div style={help_tab} className={"help-tab"} onClick={() => setShowHelp(!show_help)}>
            <div className="help-content">
                <animated.div style={text_style} className="help-content-inner">

                    <h1>What does this do</h1>
                    <ul>
                        <li>This page allows you to see the last 10 games of any <a className="api-link" target={"_blank"} href={"https://en.wikipedia.org/wiki/League_of_Legends"}>League of Legends</a> player.</li>
                    </ul>
                    <h1>How does it work</h1>
                    <ul>
                        <li>Given a region/username combination, several requests are made to the official <a className="api-link" href={'https://developer.riotgames.com/apis'} target={"_blank"}>Riot API.</a> First,
                            a request containing the given region/username is sent to a <a className={"api-link"} href={"https://developer.riotgames.com/apis#summoner-v4"} target={"_blank"}>summoners/v4</a> endpoint to get the users puuid. Next, the now retrieved puuid is used to make a request
                        to the <a className={"api-link"} href={"https://developer.riotgames.com/apis#match-v5"} target={"_blank"}>match/v5</a> endpoint, which returns a list of match ids. Finally, a request is made for each match id to <a className={"api-link"} href={"https://developer.riotgames.com/apis#match-v5"} target={"_blank"}>match/v5</a> again. This time an object containing
                        all the game data is returned to the server, sent to the user, and rendered.</li>
                    </ul>
                    <h1>Why did I make this</h1>
                    <ul>
                        <li>I made this to learn more about data retrieval, dynamic routing, caching (RTK Query & cookies), and state management</li>
                    </ul>
                    <h1>What tools did I use</h1>
                    <ul>
                        <li>Redux Toolkit Query (RTK Query)</li>
                        <li>Redux Toolkit</li>
                        <li>React</li>
                    </ul>
                </animated.div>
            </div>
        </animated.div>
    );
}

export default HelpTab;