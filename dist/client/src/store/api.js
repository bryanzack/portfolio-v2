"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetSummonerDataQuery = exports.api = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.api = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getSummonerData: builder.query({
            query: (arg) => {
                const { region, name } = arg;
                return {
                    url: `users/${region}/${name}`,
                };
            }
        }),
    }),
});
exports.useGetSummonerDataQuery = exports.api.useGetSummonerDataQuery;
