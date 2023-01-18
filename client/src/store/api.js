"use strict";
exports.__esModule = true;
exports.useGetSummonerDataQuery = exports.api = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.api = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: '/api' }),
    endpoints: function (builder) { return ({
        getSummonerData: builder.query({
            query: function (arg) {
                var region = arg.region, name = arg.name;
                return {
                    url: "users/".concat(region, "/").concat(name)
                };
            }
        })
    }); }
});
exports.useGetSummonerDataQuery = exports.api.useGetSummonerDataQuery;
