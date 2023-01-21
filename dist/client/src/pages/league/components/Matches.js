"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Matches.css");
const api_1 = require("../../../store/api");
const translateTimeStamps_1 = require("../helpers/translateTimeStamps");
const translateSpell_1 = require("../helpers/translateSpell");
const translateRunes_1 = require("../helpers/translateRunes");
const translateChampName_1 = require("../helpers/translateChampName");
const translateMultiKill_1 = require("../helpers/translateMultiKill");
const Match = (props) => {
    // shortcuts
    const user_index = props.match.metadata.participants.indexOf(props.puuid); // user participant object index
    const info = props.match.info; // shortcut to props.match.info
    const user = info.participants[user_index]; // shortcut for info.participants[user_index]
    // game content
    const now_timestamp = new Date().getTime();
    const end_timestamp = (info.gameCreation + info.gameDuration); // game end timestamp
    const seconds_since = (now_timestamp - end_timestamp) / 1000; // seconds since game ended
    const time_since = (0, translateTimeStamps_1.handleTimeSince)(seconds_since); // time since game ended as pretty string
    const game_duration = (0, translateTimeStamps_1.handleTimeLength)(info.gameDuration); // game duration as pretty string
    const game_mode = info.gameMode;
    // user content
    const team_kills = user.teamId === 100
        ? props.match.info.teams[0].objectives.champion.kills
        : props.match.info.teams[1].objectives.champion.kills;
    const kills = user.kills;
    const deaths = user.deaths;
    const assists = user.assists;
    const champ_name = (0, translateChampName_1.translateChampName)(user.championName);
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
    ];
    const multi_kill = user.largestMultiKill;
    const perk_primary = user.perks.styles[0].selections[0].perk;
    const perk_secondary = user.perks.styles[1].style;
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
                        <div className={"info"}>
                            <div className="info-top">
                                <div className="icon">
                                    <img className={"champ-image"} src={require(`../static/images/leaguestuff/champion/${champ_name}.png`)} alt={"test"}/>
                                    <div className={"champ-level"}>{champ_level}</div>
                                </div>
                                <div className={"spells"}>
                                    <img className="spell" id={"first-spell"} src={require(`../static/images/leaguestuff/spell/${(0, translateSpell_1.translateSpell)(summoner_1)}.png`)} alt=""/>
                                    <img className="spell" src={require(`../static/images/leaguestuff/spell/${(0, translateSpell_1.translateSpell)(summoner_2)}.png`)} alt=""/>
                                </div>
                                <div className="runes">
                                    <img className={"rune"} id={"first-rune"} src={(0, translateRunes_1.translateSecondary)(perk_secondary)} alt={"rune"} width={22} height={22}/>
                                    <img className={"rune"} src={(0, translateRunes_1.translatePrimary)(perk_primary)} alt={"rune"} width={22} height={22}/>
                                </div>
                                <div className={props.win ? "kda-win" : "kda-lose"}>
                                    <div className="k-d-a">
                                        <span className={"kills"}>{kills}</span>
                                        &#8202;/&#8202;
                                        <span className={"deaths"}>{deaths}</span>
                                        &#8202;/&#8202;
                                        <span className={"assists"}>{assists}</span>
                                    </div>
                                    <div className={"ratio"}>
                                        <span>{Math.round((kills + assists) / deaths * 100) / 100}:1 KDA</span>
                                    </div>
                                </div>
                                <div className="stats">
                                    <span className={"kp"}>P/Kill {Math.round(((kills + assists) / team_kills) * 100)}%</span>
                                    <span>Control Ward </span>
                                </div>
                            </div>
                            <div className="info-bottom">
                                    {items.slice(0, 6).map((item) => {
            if (item !== 0)
                return <img className={"item"} src={require(`../static/images/leaguestuff/item/${item}.png`)} alt={"item"}/>;
            else
                return <div className={props.win ? "item-empty-win" : "item-empty-lose"}/>;
        })}
                                <img className={"last-item"} src={require(`../static/images/leaguestuff/item/${items[6]}.png`)} alt={"item"}/>
                                {(multi_kill > 1) ? <div className={"multi-kill"}>{(0, translateMultiKill_1.translateMultiKill)(multi_kill)}</div> : ""}
                            </div>
                        </div>
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
const Matches = (props) => {
    console.log(`from leagueroute: ${props.args.region}, ${props.args.name}`);
    const { data: match_response, isFetching, isLoading, isError, } = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name });
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
