const React = require('react');
import './Matches.css';

import { matchNamespace } from "../helpers/match";
import { useGetSummonerDataQuery } from '../../../store/api';
import Cookies from 'universal-cookie';
import Match from "./Match";

const Matches = (props: {args: { region: string, name: string }}): JSX.Element => {
    const cookies = new Cookies();
    const {
        data: match_response,
        isFetching,
        isLoading,
        isError,
    } = useGetSummonerDataQuery({region: props.args.region, name: props.args.name});
    console.log(match_response);

    if (isLoading) return <div className={"state-indicator"}><h1>Loading...</h1></div>
    if (isFetching) return <div className={"state-indicator"}><h1>Fetching...</h1></div>
    if (match_response?.response.status_code === 404
        || match_response?.match_list === null)
        return <div> 404 {match_response.response.message}</div>
    if (isError) return <div><h1>Error...</h1></div>


    let win: boolean|undefined = undefined;
    let json = cookies.get('hist');
    // TODO `put cookie handling in helper function

    if (json !== undefined && json.length !== 0) {
        console.log('results found');
        let doesCookieExist = false;
        for (let entry in json) {
            if (json[entry].name === props.args.name) doesCookieExist = true;
            else console.log("cookie exists");
        }
        if (!doesCookieExist) {
            if (json.length < 5)
                cookies.set('hist', [{name: props.args.name, region: props.args.region}, ...json], {path: '/'});
            else
                cookies.set('hist', [{name: props.args.name, region: props.args.region}, ...json.slice(0, 4)], { path: '/'});
        }
    } else {
        console.log("empty cookies, adding entry");
        cookies.set('hist', [{name: props.args.name, region: props.args.region}], { path: '/'});
    }

    return (
        <>
            <div className="matches">
                {match_response!.match_list.map((item: matchNamespace.Match) => {
                    item.info.participants.map((participant) => {
                        if (participant.puuid === match_response?.user_puuid) {
                            win = participant.win;
                        }
                    })
                    // no one cares about tutorial games + they are inconsistent with data of other game types (no rune data)
                    if (item.info.gameMode !== 'TUTORIAL_MODULE_1'
                    && item.info.gameMode !== 'TUTORIAL_MODULE_2'
                    && item.info.gameMode !== 'TUTORIAL_MODULE_3')
                        return <Match match={item} win={win!} puuid={match_response!.user_puuid}/>
                })}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>
    )
}

export default Matches;