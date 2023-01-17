const express = require("express");
const path = require('path');
import { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', (req: Request, res: Response) => {
    res.json({message: "api"});
});
app.get('/api/users/:region/:name', (req: Request, res: Response) => {
    console.log("region/name: ");
    console.log(req.params);
    res.json({region: "LOL", name: req.params.name});
});
app.get('*', (req: Request, res: Response) => {
    console.log("*: " + req.url);
    console.log(req.params);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3001, () => {
    console.log("Listening at 3001...");
});

