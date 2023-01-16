"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api', (re, res) => {
    res.json({ message: "api" });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(3001, () => {
    console.log("Listening at 3001...");
});
