"use strict";
exports.__esModule = true;
var React = require('react');
require("./Match.css");
var translateTimeStamps_1 = require("../helpers/translateTimeStamps");
var translateChampName_1 = require("../helpers/translateChampName");
var translateSpell_1 = require("../helpers/translateSpell");
var translateRunes_1 = require("../helpers/translateRunes");
var translateMultiKill_1 = require("../helpers/translateMultiKill");
var Match = function (props) {
    // shortcuts
    var user_index = props.match.metadata.participants.indexOf(props.puuid); // user participant object index
    var info = props.match.info; // shortcut to props.match.info
    var user = info.participants[user_index]; // shortcut for info.participants[user_index]
    // game content
    var now_timestamp = new Date().getTime();
    var end_timestamp = (info.gameCreation + info.gameDuration); // game end timestamp
    var seconds_since = (now_timestamp - end_timestamp) / 1000; // seconds since game ended
    var time_since = (0, translateTimeStamps_1.handleTimeSince)(seconds_since); // time since game ended as pretty string
    var game_duration = (0, translateTimeStamps_1.handleTimeLength)(info.gameDuration); // game duration as pretty string
    var game_mode = info.gameMode;
    // user content
    var team_kills = user.teamId === 100
        ? props.match.info.teams[0].objectives.champion.kills
        : props.match.info.teams[1].objectives.champion.kills;
    var kills = user.kills;
    var deaths = user.deaths;
    var assists = user.assists;
    var champ_name = (0, translateChampName_1.translateChampName)(user.championName);
    var champ_level = user.champLevel;
    var summoner_1 = user.summoner1Id;
    var summoner_2 = user.summoner2Id;
    var items = [
        user.item0,
        user.item1,
        user.item2,
        user.item3,
        user.item4,
        user.item5,
        user.item6,
    ];
    var multi_kill = user.largestMultiKill;
    var perk_primary = user.perks.styles[0].selections[0].perk;
    var perk_secondary = user.perks.styles[1].style;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: props.win ? "match-win" : "match-lose" },
            React.createElement("div", { className: "match-content" },
                React.createElement("div", { className: "metadata" },
                    React.createElement("div", { className: props.win ? "game-mode-win" : "game-mode-lose" }, game_mode),
                    React.createElement("div", { className: "time-since" }, time_since),
                    React.createElement("div", { className: props.win ? 'line-bar-win' : 'line-bar-lose' }),
                    React.createElement("div", { className: "result" }, props.win ? "Victory" : "Defeat"),
                    React.createElement("div", { className: "duration" }, game_duration)),
                React.createElement("div", { className: "loadout" },
                    React.createElement("div", { className: "info" },
                        React.createElement("div", { className: "info-top" },
                            React.createElement("div", { className: "icon" },
                                React.createElement("img", { className: "champ-image", src: require("../static/images/leaguestuff/champion/".concat(champ_name, ".png")), alt: "test" }),
                                React.createElement("div", { className: "champ-level" }, champ_level)),
                            React.createElement("div", { className: "spells" },
                                React.createElement("img", { className: "spell", id: "first-spell", src: require("../static/images/leaguestuff/spell/".concat((0, translateSpell_1.translateSpell)(summoner_1), ".png")), alt: "" }),
                                React.createElement("img", { className: "spell", src: require("../static/images/leaguestuff/spell/".concat((0, translateSpell_1.translateSpell)(summoner_2), ".png")), alt: "" })),
                            React.createElement("div", { className: "runes" },
                                React.createElement("img", { className: "rune", id: "first-rune", src: (0, translateRunes_1.translateSecondary)(perk_secondary), alt: "rune", width: 22, height: 22 }),
                                React.createElement("img", { className: "rune", src: (0, translateRunes_1.translatePrimary)(perk_primary), alt: "rune", width: 22, height: 22 }),
                                "                                "),
                            React.createElement("div", { className: props.win ? "kda-win" : "kda-lose" },
                                React.createElement("div", { className: "k-d-a" },
                                    React.createElement("span", { className: "kills" }, kills),
                                    "\u200A/\u200A",
                                    React.createElement("span", { className: "deaths" }, deaths),
                                    "\u200A/\u200A",
                                    React.createElement("span", { className: "assists" }, assists)),
                                React.createElement("div", { className: "ratio" },
                                    React.createElement("span", null,
                                        Math.round((kills + assists) / deaths * 100) / 100,
                                        ":1 KDA"))),
                            React.createElement("div", { className: "stats" },
                                React.createElement("span", { className: "kp" },
                                    "P/Kill ",
                                    Math.round(((kills + assists) / team_kills) * 100),
                                    "%"),
                                React.createElement("span", null, "Control Ward "))),
                        React.createElement("div", { className: "info-bottom" },
                            items.slice(0, 6).map(function (item) {
                                if (item !== 0)
                                    return React.createElement("img", { className: "item", src: require("../static/images/leaguestuff/item/".concat(item, ".png")), alt: "item" });
                                else
                                    return React.createElement("div", { className: props.win ? "item-empty-win" : "item-empty-lose" });
                            }),
                            (items[6] !== 0)
                                ? React.createElement("img", { className: "last-item", src: require("../static/images/leaguestuff/item/".concat(items[6], ".png")), alt: "item" })
                                : React.createElement("div", { className: props.win ? "item-empty-win" : "item-empty-lose" }),
                            (multi_kill > 1) ? React.createElement("div", { className: "multi-kill" }, (0, translateMultiKill_1.translateMultiKill)(multi_kill)) : ""))),
                React.createElement("div", { className: "players" },
                    React.createElement("div", { className: "team1" }),
                    React.createElement("div", { className: "team2" }))),
            React.createElement("div", { className: "match-dropdown" }))));
};
exports["default"] = Match;
