"use strict";
exports.__esModule = true;
var express = require("express");
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api', function (req, res) {
    res.json({ message: "Hello" });
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(3001, function () {
    console.log("Listening at 3001...");
});
