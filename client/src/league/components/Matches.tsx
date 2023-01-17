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
const Matches = (): JSX.Element => {
    const user_input = useSelector((state: RootState) => state.league.user_input);
    const selected_region = useSelector((state: RootState) => state.league.selected_region);
    console.log(user_input, selected_region);
    const {
        data: summoner,
        isFetching,
        isLoading,
    } = useGetSummonerDataQuery({region: selected_region, name: user_input})
    if (isLoading) return <div>Loading...</div>
    if (!summoner) return <div>Missing summoner!</div>
    return (
        <Test name={summoner.name} region={summoner.id} />
    )
}

export default Matches;