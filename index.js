"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var translateRegion_js_1 = require("./client/src/pages/league/helpers/translateRegion.js");
var express = require("express");
var path = require('path');
var dotenv = require('dotenv');
var app = express();
dotenv.config({ path: __dirname + '/.env' });
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api', function (req, res) {
    res.json({ message: "api" });
});
app.get('/api/users/:region/:name', function (req, res) {
    console.log("region/name (req): ");
    console.log(req.params);
    var summonerURL = "https://".concat(req.params.region, ".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(req.params.name, "?api_key=").concat(process.env.API_KEY);
    (0, node_fetch_1["default"])(summonerURL)
        .then(function (summoner_response) { return summoner_response.json()
        .then(function (json) {
        if (json.puuid) {
            var puuid_1 = json.puuid;
            var routing_value_1 = (0, translateRegion_js_1["default"])(req.params.region);
            var matchListURL = "https://".concat(routing_value_1, ".api.riotgames.com/lol/match/v5/matches/by-puuid/").concat(json.puuid, "/ids?start=0&count=20&api_key=").concat(process.env.API_KEY);
            (0, node_fetch_1["default"])(matchListURL)
                .then(function (match_response) { return match_response.json()
                .then(function (json) {
                var urls = [];
                json.map(function (id) {
                    var matchURL = "https://".concat(routing_value_1, ".api.riotgames.com/lol/match/v5/matches/").concat(id, "?api_key=").concat(process.env.API_KEY);
                    urls.push(matchURL);
                });
                // if the user has 11+ matches, trim list to 10
                // if use has <=10 matches, request all that is available
                if (urls.length === 0) {
                    var match_response_1 = {
                        user_puuid: "",
                        response: {
                            message: "Data not found - summoner has zero matches played",
                            status_code: 404
                        },
                        match_list: []
                    };
                    res.json(match_response_1);
                }
                if (urls.length > 10)
                    urls = urls.slice(0, 10);
                Promise.all(urls.map(function (url) { return (0, node_fetch_1["default"])(url); }))
                    .then(function (responses) {
                    console.log(puuid_1);
                    Promise.all(responses.map(function (r) { return r.json(); }))
                        .then(function (results) {
                        var match_response = {
                            user_puuid: puuid_1,
                            response: {
                                message: summoner_response.statusText,
                                status_code: summoner_response.status
                            },
                            match_list: results
                        };
                        res.send(match_response);
                    });
                });
            }); });
        }
        else {
            console.log(json);
            var match_response = {
                user_puuid: "",
                response: {
                    message: json.status.message,
                    status_code: json.status.status_code
                },
                match_list: []
            };
            res.json(match_response);
        }
    })["catch"](function (err) { return res.json(err); }); });
});
app.get('*', function (req, res) {
    console.log("*: " + req.url);
    console.log(req.params);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(3001, function () {
    console.log("Listening at 3001...");
});
