const React = require('react');
import './Matches.css';

import { SummonerType } from "../helpers/summoner";
import type { RootState } from '../../store';
import { FC, useEffect } from 'react';
import { useSelector } from "react-redux";
import { api, useGetSummonerDataQuery } from '../../store/api';

type SummonerRequestArgs = {
    region: string,
    name: string,
}

const Test = (props: { summoner: SummonerType} ): JSX.Element => {
    console.log(props.summoner);
    return (
        <div className={"data"}>
            <span>id: {props.summoner.id}</span>
            <span>accountId: {props.summoner.accountId}</span>
            <span>puuid: {props.summoner.puuid}</span>
            <span>name: {props.summoner.name}</span>
            <span>profileIconId: {props.summoner.profileIconId}</span>
            <span>revisionDate: {props.summoner.revisionDate}</span>
            <span>summonerLevel: {props.summoner.summonerLevel}</span>
        </div>
    );
}
const Matches: FC<SummonerRequestArgs> = ({region, name}): JSX.Element => {
    const {
        data: summoner,
        error,
        isFetching,
        isLoading,
    } = useGetSummonerDataQuery({region: region, name: name});
    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (!summoner || !summoner.id) return <div>Summoner not found...</div>
    if (error) return <div>Error...</div>
    return (
        <>
            <div className="matches">
                <Test summoner={summoner} />
            </div>
        </>
    )
}

export default Matches;