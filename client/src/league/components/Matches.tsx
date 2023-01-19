const React = require('react');
import './Matches.css';

import { matchNamespace } from "../helpers/match";
import { api, useGetSummonerDataQuery } from '../../store/api';
import { handleTimeLength, handleTimeSince } from "../helpers/translateTimeStamps";

const Match = (props: { match: matchNamespace.Match, win: boolean}): JSX.Element => {
    let now_timestamp = new Date().getTime();
    let end_timestamp = (props.match.info.gameCreation + props.match.info.gameDuration);
    let seconds_since = (now_timestamp - end_timestamp)/1000;
    let time_since = handleTimeSince(seconds_since);
    let game_duration = handleTimeLength(props.match.info.gameDuration);
    let game_mode = props.match.info.gameMode;
    return (
        <>
            <div className={props.win ? "match-win" : "match-lose"}>
                <div className="match-content">
                    <div className="metadata">
                        <div className={props.win ? "game-mode-win" : "game-mode-lose"}>{game_mode}</div>
                        <div className={"time-since"}>{time_since}</div>
                        <div className={"result"}>{props.win ? "Victory" : "Defeat"}</div>
                        <div className={"duration"}>{game_duration}</div>
                    </div>
                    <div className="loadout">

                    </div>
                    <div className="stats">

                    </div>
                    <div className="players">
                        <div className="team1">

                        </div>
                        <div className="team2">

                        </div>
                    </div>
                </div>
                <div className="match-dropdown">

                </div>
            </div>
        </>
    );
}
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
const Matches = (props: {args: { region: string, name: string }}): JSX.Element => {
    const {
        data: match_response,
        isFetching,
        isLoading,
        isError,
    } = useGetSummonerDataQuery({region: props.args.region, name: props.args.name});
    console.log("match response:" );
    console.log(match_response);
    console.log("indexof")

    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (match_response?.response.status_code === 404) return <div> 404 {match_response.response.message}</div>
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className="matches">
                {match_response!.match_list.map((item: matchNamespace.Match) => {
                    let win: boolean | undefined = undefined;
                    item.info.participants.map((participant) => {
                        if (participant.puuid === match_response?.user_puuid) {
                            win = participant.win;
                        }
                    })
                    return <Match match={item} win={win!}/>
                })}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>
    )
}

export default Matches;