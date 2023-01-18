import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { matchNamespace } from "../league/helpers/match";

export type SummonerQueryArgs = {
    region: string,
    name: string,
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getSummonerData: builder.query<matchNamespace.MatchListResponse, { region: string, name: string }>({
            query: (arg) => {
                const { region, name } = arg;
                return {
                    url: `users/${region}/${name}`,
                }
            }
        }),
    }),
});

export const { useGetSummonerDataQuery } = api