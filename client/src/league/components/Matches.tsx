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

const Test = (props: { match_list: matchNamespace.MatchList} ): JSX.Element => {
    console.log(props.match_list);
    props.match_list.map((item: matchNamespace.Match) => {
        console.log(item);
    });
    return (
        <>
            {props.match_list.map((match: matchNamespace.Match) => (
                <div className={"matches"}>
                    <span>{match.info.gameId}</span>
                </div>
            ))}
        </>
    );
}
const Matches: FC<SummonerRequestArgs> = ({region, name}): JSX.Element => {
    const {
        data: match_list,
        error,
        isFetching,
        isLoading,
    } = useGetSummonerDataQuery({region: region, name: name});
    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (!match_list) return <div>No matches found...</div>
    if (error) return <div>Error...</div>
    return (
        <>
            <div className="matches">
                <Test match_list={match_list} />
            </div>
        </>
    )
}

export default Matches;