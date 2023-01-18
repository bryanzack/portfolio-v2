const React = require('react');
import './Matches.css';

import { matchNamespace } from "../helpers/match";
import { api, useGetSummonerDataQuery } from '../../store/api';

type SummonerRequestArgs = {
    region: string,
    name: string,
}

const Match = (props: { match: matchNamespace.Match} ): JSX.Element => {
    let today_epoch = new Date().getTime() /1000; // in seconds
    let today_date = new Date(today_epoch);
    let end_epoch = props.match.info.gameEndTimestamp;
    let end_date = new Date(end_epoch);
    let time_since = today_date.getTime() - end_date.getTime();
    let game_mode = props.match.info.gameMode;
    console.log(props.match);
    return (
        <>
            <div className={"match"}>
                <div className="match-content">
                    <div className="metadata">
                        <span>{game_mode}</span>
                        <span>{time_since}</span>
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
const Matches = (props: {args: SummonerRequestArgs}): JSX.Element => {
    const {
        data: match_list,
        isFetching,
        isLoading,
        isError,
    } = useGetSummonerDataQuery({region: props.args.region, name: props.args.name});
    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (!match_list || match_list.length === 0) return <div>No matches found...</div>
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className="matches">
                {match_list.map((item: matchNamespace.Match) => (
                    <Match match={item} />
                ))}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>
    )
}

export default Matches;