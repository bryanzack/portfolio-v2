"use strict";
exports.__esModule = true;
var React = require('react');
require("./Matches.css");
var api_1 = require("../../../store/api");
var translateTimeStamps_1 = require("../helpers/translateTimeStamps");
var translateSpell_1 = require("../helpers/translateSpell");
var Match = function (props) {
    // shortcuts
    var user_index = props.match.metadata.participants.indexOf(props.puuid);
    var info = props.match.info;
    var user = info.participants[user_index];
    // game content
    var now_timestamp = new Date().getTime();
    var end_timestamp = (info.gameCreation + info.gameDuration);
    var seconds_since = (now_timestamp - end_timestamp) / 1000;
    var time_since = (0, translateTimeStamps_1.handleTimeSince)(seconds_since);
    var game_duration = (0, translateTimeStamps_1.handleTimeLength)(info.gameDuration);
    var game_mode = info.gameMode;
    // user content
    var kills = user.kills;
    var deaths = user.deaths;
    var assists = user.assists;
    var champ_name = user.championName;
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
                                React.createElement("img", { className: "champ-image", src: "/images/leaguestuff/champion/".concat(champ_name, ".png"), alt: "test" }),
                                React.createElement("div", { className: "champ-level" }, champ_level)),
                            React.createElement("div", { className: "spells" },
                                React.createElement("img", { className: "spell", id: "first-spell", src: "/images/leaguestuff/spell/".concat((0, translateSpell_1.translateSpell)(summoner_1), ".png"), alt: "" }),
                                React.createElement("img", { className: "spell", src: "/images/leaguestuff/spell/".concat((0, translateSpell_1.translateSpell)(summoner_2), ".png"), alt: "" }))),
                        React.createElement("div", { className: "info-bottom" }, items.map(function (item) {
                            if (item !== 0)
                                return React.createElement("img", { className: "item", src: "/images/leaguestuff/item/".concat(item, ".png") });
                            else
                                return React.createElement("div", { className: props.win ? "item-empty-win" : "item-empty-lose" });
                        })))),
                React.createElement("div", { className: "stats" }),
                React.createElement("div", { className: "players" },
                    React.createElement("div", { className: "team1" }),
                    React.createElement("div", { className: "team2" }))),
            React.createElement("div", { className: "match-dropdown" }))));
};
// TODO `remove useless FC and pass in one object (getSummoner arguments) as prop
var Matches = function (props) {
    var _a = (0, api_1.useGetSummonerDataQuery)({ region: props.args.region, name: props.args.name }), match_response = _a.data, isFetching = _a.isFetching, isLoading = _a.isLoading, isError = _a.isError;
    console.log("match response:");
    console.log(match_response);
    if (isLoading)
        return React.createElement("div", null, "Loading...");
    if (isFetching)
        return React.createElement("div", null, "Fetching...");
    if ((match_response === null || match_response === void 0 ? void 0 : match_response.response.status_code) === 404)
        return React.createElement("div", null,
            " 404 ",
            match_response.response.message);
    if (isError)
        return React.createElement("div", null, "Error...");
    var win = undefined;
    var champ_name = "init";
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "matches" }, match_response.match_list.map(function (item) {
            item.info.participants.map(function (participant) {
                if (participant.puuid === (match_response === null || match_response === void 0 ? void 0 : match_response.user_puuid)) {
                    win = participant.win;
                    champ_name = participant.championName;
                }
            });
            return React.createElement(Match, { match: item, win: win, puuid: match_response.user_puuid });
        })),
        React.createElement("button", { className: "load-more" }, "Load more...")));
};
exports["default"] = Matches;
