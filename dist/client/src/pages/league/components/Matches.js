"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Matches.css");
const api_1 = require("../../../store/api");
const translateTimeStamps_1 = require("../helpers/translateTimeStamps");
const Match = (props) => {
    // shortcuts
    const user_index = props.match.metadata.participants.indexOf(props.puuid);
    const info = props.match.info;
    const user = info.participants[user_index];
    // game content
    const now_timestamp = new Date().getTime();
    const end_timestamp = (info.gameCreation + info.gameDuration);
    const seconds_since = (now_timestamp - end_timestamp) / 1000;
    const time_since = (0, translateTimeStamps_1.handleTimeSince)(seconds_since);
    const game_duration = (0, translateTimeStamps_1.handleTimeLength)(info.gameDuration);
    const game_mode = info.gameMode;
    // user content
    const kills = user.kills;
    const deaths = user.deaths;
    const assists = user.assists;
    const champ_name = user.championName;
    const champ_level = user.champLevel;
    const summoner_1 = user.summoner1Id;
    const summoner_2 = user.summoner2Id;
    const item0 = user.item0;
    const item1 = user.item1;
    const item2 = user.item2;
    const item3 = user.item3;
    const item4 = user.item4;
    const item5 = user.item5;
    const item6 = user.item6;
    const multi_kill = user.largestMultiKill;
    return (<>
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
                        <div className={"champ-info"}>
                            <img className={"champ-image"} src={`../../../images/leaguestuff/champion/${champ_name}`}/>
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
        </>);
};
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
const Matches = (props) => {
    const { data: match_response, isFetching, isLoading, isError, } = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name });
    console.log("match response:");
    console.log(match_response);
    if (isLoading)
        return <div>Loading...</div>;
    if (isFetching)
        return <div>Fetching...</div>;
    if ((match_response === null || match_response === void 0 ? void 0 : match_response.response.status_code) === 404)
        return <div> 404 {match_response.response.message}</div>;
    if (isError)
        return <div>Error...</div>;
    let win = undefined;
    let champ_name = "init";
    return (<>
            <div className="matches">
                {match_response.match_list.map((item) => {
            item.info.participants.map((participant) => {
                if (participant.puuid === (match_response === null || match_response === void 0 ? void 0 : match_response.user_puuid)) {
                    win = participant.win;
                    champ_name = participant.championName;
                }
            });
            return <Match match={item} win={win} puuid={match_response.user_puuid}/>;
        })}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>);
};
exports.default = Matches;
