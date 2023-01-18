import MatchList = matchNamespace.MatchList;

const React = require('react');
import './Matches.css';

import type { SummonerType } from "../helpers/summoner";
import type { RootState } from '../../store';
import { matchNamespace } from "../helpers/match";
import { FC, useEffect } from 'react';
import { useSelector } from "react-redux";
import { api, useGetSummonerDataQuery } from '../../store/api';

type SummonerRequestArgs = {
    region: string,
    name: string,
}

const Match = (props: { match: matchNamespace.Match} ): JSX.Element => {
    console.log(props.match);
    return (
        <>
            <div className={"match"}>
                <span>{props.match.info.gameId}</span>
            </div>
        </>
    );
}
// TODO `remove useless FC and pass in one object as prop
const Matches: FC<SummonerRequestArgs> = ({region, name}): JSX.Element => {
    const {
        data: match_list,
        isFetching,
        isLoading,
        isError,
    } = useGetSummonerDataQuery({region: region, name: name});
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
        </>
    )
}

export default Matches;