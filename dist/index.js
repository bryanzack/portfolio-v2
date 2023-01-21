"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const translateRegion_js_1 = __importDefault(require("./client/src/pages/league/helpers/translateRegion.js"));
const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: __dirname + '/.env' });
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api', (req, res) => {
    res.json({ message: "api" });
});
app.get('/api/users/:region/:name', (req, res) => {
    console.log("region/name (req): ");
    console.log(req.params);
    let summonerURL = `https://${req.params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${process.env.API_KEY}`;
    (0, node_fetch_1.default)(summonerURL)
        .then(summoner_response => summoner_response.json()
        .then((json) => {
        if (json.puuid) {
            let puuid = json.puuid;
            let routing_value = (0, translateRegion_js_1.default)(req.params.region);
            let matchListURL = `https://${routing_value}.api.riotgames.com/lol/match/v5/matches/by-puuid/${json.puuid}/ids?start=0&count=20&api_key=${process.env.API_KEY}`;
            (0, node_fetch_1.default)(matchListURL)
                .then(match_response => match_response.json()
                .then(json => {
                let urls = [];
                json.map((id) => {
                    let matchURL = `https://${routing_value}.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${process.env.API_KEY}`;
                    urls.push(matchURL);
                });
                // if the user has 11+ matches, trim list to 10
                // if use has <=10 matches, request all that is available
                if (urls.length === 0) {
                    let match_response = {
                        user_puuid: "",
                        response: {
                            message: "Data not found - summoner has zero matches played",
                            status_code: 404,
                        },
                        match_list: [],
                    };
                    res.json(match_response);
                }
                if (urls.length > 10)
                    urls = urls.slice(0, 10);
                Promise.all(urls.map((url) => (0, node_fetch_1.default)(url)))
                    .then(responses => {
                    console.log(puuid);
                    Promise.all(responses.map(r => r.json()))
                        .then(results => {
                        let match_response = {
                            user_puuid: puuid,
                            response: {
                                message: summoner_response.statusText,
                                status_code: summoner_response.status,
                            },
                            match_list: results,
                        };
                        res.send(match_response);
                    });
                });
            }));
        }
        else {
            console.log(json);
            let match_response = {
                user_puuid: "",
                response: {
                    message: json.status.message,
                    status_code: json.status.status_code,
                },
                match_list: [],
            };
            res.json(match_response);
        }
    })
        .catch(err => res.json(err)));
});
app.get('*', (req, res) => {
    console.log("*: " + req.url);
    console.log(req.params);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(3001, () => {
    console.log("Listening at 3001...");
});
