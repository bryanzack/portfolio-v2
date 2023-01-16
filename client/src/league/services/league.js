"use strict";
exports.__esModule = true;
exports.useGetSummonerData = exports.leagueApi = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.leagueApi = (0, react_1.createApi)({
    reducerPath: 'leagueApi',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: 'https://localhost.com/3000/api/' }),
    endpoints: function (builder) { return ({
        getSummonerData: builder.query({
            query: function (region, name) { return "summoners/".concat(region, "/").concat(name); }
        })
    }); }
});
exports.useGetSummonerData = exports.leagueApi.useGetSummonerData;
