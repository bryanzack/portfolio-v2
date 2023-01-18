import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SummonerType } from '../league/helpers/summoner';

export type SummonerQueryArgs = {
    name: string,
    region: string,
}
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getSummonerData: builder.query<SummonerType, { region: string, name: string }>({
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