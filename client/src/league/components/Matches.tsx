const React = require('react');
import './Matches.css';

import type { RootState } from '../../store';
import type { SummonerQueryArgs } from "../../store/api";
import { FC, useEffect } from 'react';
import { useSelector } from "react-redux";
import { api, useGetSummonerDataQuery } from '../../store/api';

type TestType = {
    region: string,
    name: string,
}

interface TestProps {
    test: TestType,
}
const Test: FC<TestType> = ({ region, name}): JSX.Element => {
    console.log(`from test: ${region}, ${name}`);
    return (
        <>
            <span>{name} {region}</span>
        </>
    );
}
const Matches: FC<TestType> = ({region, name}): JSX.Element => {
    console.log(region, name);
    const {
        data: summoner,
        isFetching,
        isLoading,
    } = useGetSummonerDataQuery({region: region, name: name});
    if (isLoading) return <div>Loading...</div>
    if (isFetching) return <div>Fetching...</div>
    if (!summoner) return <div>Missing summoner!</div>
    return (
        <>
            <div className="matches">
                <span>MATCHES</span>
                <Test name={summoner.name} region={summoner.id} />
            </div>
        </>
    )
}

export default Matches;