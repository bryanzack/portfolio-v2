const React = require('react');
import './Matches.css';

import type { RootState } from '../../store';
import type { SummonerQueryArgs } from "../../store/api";
import { FC } from 'react';
import { useSelector } from "react-redux";
import { api, useGetSummonerDataQuery } from '../../store/api';

type TestType = {
    region: string,
    name: string,
}

interface TestProps {
    test: TestType,
}
const Test: FC<TestProps> = ({ test }): JSX.Element => {
    const {
        data: summoner,
        isFetching,
        isLoading,
    } = useGetSummonerDataQuery({ region: test.region, name: test.name});
    if (isLoading) return <div>Loading...</div>
    if (!summoner) return <div>Missing summoner!</div>
    return (
        <>
            <span>{summoner.name} {summoner.id} {isFetching ? '...refetching' : ''}</span>
        </>
    );
}
const Matches = (): JSX.Element => {
    const user_input = useSelector((state: RootState) => state.searchbar.user_input);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    return (
        <Test test={{name: user_input, region: selected_region}} />
    )
}

export default Matches;