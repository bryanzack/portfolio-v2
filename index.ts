import fetch from 'node-fetch';
import { Express, Request, Response } from 'express';
import translateRegion from "./client/src/pages/league/helpers/translateRegion.js";
import { matchNamespace } from "./client/src/pages/league/helpers/match.js";
const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const app: Express = express();

dotenv.config({ path: __dirname+'/.env'});
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', (req: Request, res: Response) => {
    res.json({message: "api"});
});
app.get('/api/users/:region/:name', (req: Request, res: Response) => {
    console.log("region/name (req): ");
    console.log(req.params);
    let summonerURL = `https://${req.params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${process.env.API_KEY}`;
    fetch(summonerURL)
        .then(summoner_response => summoner_response.json()
        .then((json) => {
            if (json.puuid) {
                let puuid = json.puuid;
                let routing_value = translateRegion(req.params.region);
                let matchListURL = `https://${routing_value}.api.riotgames.com/lol/match/v5/matches/by-puuid/${json.puuid}/ids?start=0&count=20&api_key=${process.env.API_KEY}`;
                console.log(matchListURL);
                fetch(matchListURL)
                    .then(match_response => match_response.json()
                    .then(json => {
                        let urls: string[] = [];
                        json.map((id: string) => {
                            let matchURL = `https://${routing_value}.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${process.env.API_KEY}`;
                            urls.push(matchURL);
                        });
                        // if the user has 11+ matches, trim list to 10
                        // if use has <=10 matches, request all that is available
                        if (urls.length === 0 || !urls) {
                            console.log("urls.length is zero");
                            let match_response: matchNamespace.MatchListResponse = {
                                user_puuid: "",
                                response: {
                                    message: "Data not found - summoner has zero matches played",
                                    status_code: 404,
                                },
                                match_list: [],
                            }
                            res.json(match_response);
                            return;
                        }
                        if (urls.length > 10) urls = urls.slice(0, 10);
                        Promise.all(urls.map((url: string) => fetch(url)))
                            .then(responses => {
                                console.log(puuid);
                                Promise.all(responses.map(r => r.json()))
                                    .then(results => {
                                        let match_response: matchNamespace.MatchListResponse = {
                                            user_puuid: puuid,
                                            response: {
                                                message: summoner_response.statusText,
                                                status_code: summoner_response.status,
                                            },
                                            match_list: results,
                                        }
                                        res.send(match_response);
                                    });
                            });
                    }));
            } else {
                console.log(json);
                let match_response: matchNamespace.MatchListResponse = {
                    user_puuid: "",
                    response: {
                        message: json.status.message,
                        status_code: json.status.status_code,
                    },
                    match_list: [],
                }
                res.json(match_response);
            }
        })
        .catch(err => res.json(err)));
});
app.get('*', (req: Request, res: Response) => {
    console.log("*: " + req.url);
    console.log(req.params);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3001, () => {
    console.log("Listening at 3001...");
});

