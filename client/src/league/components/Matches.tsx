const React = require('react');
import './Matches.css';

import { matchNamespace } from "../helpers/match";
import { api, useGetSummonerDataQuery } from '../../store/api';
import { handleTimeLength, handleTimeSince } from "../helpers/translateTimeStamps";

const Match = (props: { match: matchNamespace.Match} ): JSX.Element => {
    let now_timestamp = new Date().getTime();
    let end_timestamp = (props.match.info.gameCreation + props.match.info.gameDuration) ;
    let seconds_since = (now_timestamp - end_timestamp)/1000;
    let time_since = handleTimeSince(seconds_since);
    let game_duration = handleTimeLength(props.match.info.gameDuration);
    let game_mode = props.match.info.gameMode;
    console.log(props.match);
    return (
        <>
            <div className={"match"}>
                <div className="match-content">
                    <div className="metadata">
                        <span>{game_mode}</span>
                        <span>{time_since}</span>
                        <span>{game_duration}</span>
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
    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (match_response!.response.status_code === 404) return <div> 404 {match_response!.response.message}</div>
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className="matches">
                {match_response!.match_list.map((item: matchNamespace.Match) => (
                    <Match match={item} />
                ))}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>
    )
}

export default Matches;