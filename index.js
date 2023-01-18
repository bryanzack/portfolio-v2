"use strict";
exports.__esModule = true;
var express = require("express");
var path = require('path');
var dotenv = require('dotenv');
var app = express();
var node_fetch_1 = require("node-fetch");
dotenv.config({ path: __dirname + '/.env' });
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api', function (req, res) {
    res.json({ message: "api" });
});
app.get('/api/users/:region/:name', function (req, res) {
    console.log("region/name (req): ");
    console.log(req.params);
    var url = "https://".concat(req.params.region, ".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(req.params.name, "?api_key=").concat(process.env.API_KEY);
    (0, node_fetch_1["default"])(url)
        .then(function (response) { return response.json()
        .then(function (json) { return res.json(json); })["catch"](function (err) { return res.json(err); }); });
});
app.get('*', function (req, res) {
    console.log("*: " + req.url);
    console.log(req.params);
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(3001, function () {
    console.log("Listening at 3001...");
});
