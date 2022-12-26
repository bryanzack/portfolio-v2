const express = require("express");
const path = require('path');
import { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api', (re: Request, res: Response) => {
    res.json({message: "Hello"});
});
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3001, () => {
    console.log("Listening at 3001...");
});

