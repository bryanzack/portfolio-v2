"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./Matches.css");
const api_1 = require("../../store/api");
const Match = (props) => {
    let game_mode = props.match.info.gameMode;
    console.log(props.match);
    return (<>
            <div className={"match"}>
                <div className="match-content">
                    <div className="metadata">
                        {game_mode}
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
        </>);
};
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
const Matches = (props) => {
    const { data: match_list, isFetching, isLoading, isError, } = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name });
    if (isLoading)
        return <div>Loading...</div>;
    if (isFetching)
        return <div>Fetching...</div>;
    if (!match_list || match_list.length === 0)
        return <div>No matches found...</div>;
    if (isError)
        return <div>Error...</div>;
    return (<>
            <div className="matches">
                {match_list.map((item) => (<Match match={item}/>))}
            </div>
            <button className={"load-more"}>Load more...</button>
        </>);
};
exports.default = Matches;
