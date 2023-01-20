const React = require('react');
import './Matches.css';

import { matchNamespace } from "../helpers/match";
import { useGetSummonerDataQuery } from '../../../store/api';
import { handleTimeLength, handleTimeSince } from "../helpers/translateTimeStamps";
import { translateSpell } from '../helpers/translateSpell';

const Match = (props: { match: matchNamespace.Match, win: boolean, puuid: string }): JSX.Element => {
    // shortcuts
    const user_index = props.match.metadata.participants.indexOf(props.puuid);
    const info = props.match.info;
    const user = info.participants[user_index];

    // game content
    const now_timestamp = new Date().getTime();
    const end_timestamp = (info.gameCreation + info.gameDuration);
    const seconds_since = (now_timestamp - end_timestamp)/1000;
    const time_since = handleTimeSince(seconds_since);
    const game_duration = handleTimeLength(info.gameDuration);
    const game_mode = info.gameMode;

    // user content
    const kills = user.kills;
    const deaths = user.deaths;
    const assists = user.assists;
    const champ_name = user.championName;
    const champ_level = user.champLevel;
    const summoner_1 = user.summoner1Id;
    const summoner_2 = user.summoner2Id;
    const items = [
        user.item0,
        user.item1,
        user.item2,
        user.item3,
        user.item4,
        user.item5,
        user.item6,
    ]

    const multi_kill = user.largestMultiKill;
    const perk_primary = user.perks.styles[0].selections[0].perk;
    const perk_secondary = user.perks.styles[1].style;

    return (
        <>
            <div className={props.win ? "match-win" : "match-lose"}>
                <div className="match-content">
                    <div className="metadata">
                        <div className={props.win ? "game-mode-win" : "game-mode-lose"}>{game_mode}</div>
                        <div className={"time-since"}>{time_since}</div>
                        <div className={props.win ? 'line-bar-win' : 'line-bar-lose'}></div>
                        <div className={"result"}>{props.win ? "Victory" : "Defeat"}</div>
                        <div className={"duration"}>{game_duration}</div>
                    </div>
                    <div className="loadout">
                        <div className={"info"}>
                            <div className="info-top">
                                <div className="icon">
                                    <img className={"champ-image"} src={`/images/leaguestuff/champion/${champ_name}.png`} alt={"test"} />
                                    <div className={"champ-level"}>{champ_level}</div>
                                </div>
                                <div className={"spells"}>
                                    <img className="spell" id={"first-spell"} src={`/images/leaguestuff/spell/${translateSpell(summoner_1)}.png`} alt="" />
                                    <img className="spell" src={`/images/leaguestuff/spell/${translateSpell(summoner_2)}.png`} alt="" />
                                </div>
                            </div>
                            <div className="info-bottom">
                                    {items.map((item) => {
                                        if (item !== 0)
                                            return <img className={"item"} src={`/images/leaguestuff/item/${item}.png`}/>
                                        else
                                            return <div className={props.win ? "item-empty-win" : "item-empty-lose"} />
                                    })}
                            </div>
                        </div>
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
    if (match_response?.response.status_code === 404) return <div> 404 {match_response.response.message}</div>
    if (isError) return <div>Error...</div>
    let win: boolean|undefined = undefined;
    let champ_name = "init";
    return (
        <>
            <div className="matches">
                {match_response!.match_list.map((item: matchNamespace.Match) => {
                    item.info.participants.map((participant) => {
                        if (participant.puuid === match_response?.user_puuid) {
                            win = participant.win;
                            champ_name = participant.championName;
                        }
                    })
                    return <Match match={item} win={win!} puuid={match_response!.user_puuid}/>
                })}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>
    )
}

export default Matches;