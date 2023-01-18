const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const app: Express = express();
import fetch from 'node-fetch';
import { Express, Request, Response } from 'express';

dotenv.config({ path: __dirname+'/.env'});
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', (req: Request, res: Response) => {
    res.json({message: "api"});
});
app.get('/api/users/:region/:name', (req: Request, res: Response) => {
    console.log("region/name (req): ");
    console.log(req.params);
    let url = `https://${req.params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${process.env.API_KEY}`
    fetch(url)
        .then(response => response.json()
        .then(json => res.json(json))
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

