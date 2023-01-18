"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var translateRegion_1 = require("./client/src/league/helpers/translateRegion");
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
            var routing_value_1 = (0, translateRegion_1["default"])(req.params.region);
            var matchListURL = "https://".concat(routing_value_1, ".api.riotgames.com/lol/match/v5/matches/by-puuid/").concat(json.puuid, "/ids?start=0&count=20&api_key=").concat(process.env.API_KEY);
            (0, node_fetch_1["default"])(matchListURL)
                .then(function (match_response) { return match_response.json()
                .then(function (json) {
                var urls = [];
                json.map(function (id) {
                    var matchURL = "https://".concat(routing_value_1, ".api.riotgames.com/lol/match/v5/matches/").concat(id, "?api_key=").concat(process.env.API_KEY);
                    urls.push(matchURL);
                });
                var smallurls = urls.slice(Math.ceil(urls.length / 2));
                //console.log(urls);
                Promise.all(smallurls.map(function (url) { return (0, node_fetch_1["default"])(url); }))
                    .then(function (responses) {
                    Promise.all(responses.map(function (r) { return r.json(); }))
                        .then(function (results) { return res.json(results); });
                });
            }); });
        }
        else {
            res.json(null);
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
