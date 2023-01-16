import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Summoner } from '../helpers/summoner';

export const leagueApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    tagTypes: ['Summoner'],
    endpoints: (build) => ({
        getSummonerData: build.query({
            query: () => ({ url: `/asdf`}),
            providesTags: ['Summoner'],

        })
    })
});
export const { useGetSummonerData } = leagueApi;