"use strict";
exports.__esModule = true;
exports.handleTimeLength = exports.handleTimeSince = void 0;
var handleTimeSince = function (gameEndTimestamp, todayTimestamp) {
    var secondsElapsed = Math.round((todayTimestamp - gameEndTimestamp) / 1000); // seconds since gameEndTimestamp
    var minutesElapsed = secondsElapsed / 60;
    var hoursElapsed = minutesElapsed / 60;
    var daysElapsed = hoursElapsed / 24;
    var weeksElapsed = daysElapsed / 7;
    var monthsElapsed = weeksElapsed / 4.3;
    var yearsElapsed = monthsElapsed / 12;
    var times = {
        "second": secondsElapsed,
        "minute": minutesElapsed,
        "hour": hoursElapsed,
        "day": daysElapsed,
        "week": weeksElapsed,
        "month": monthsElapsed,
        "year": yearsElapsed
    };
    var elapsed = ["", 0];
    for (var time in times) {
        if (elapsed[1] === 0 || times[time] < elapsed[1] && times[time] >= 1) {
            elapsed[0] = time;
            elapsed[1] = times[time];
        }
    }
    if (Math.round(elapsed[1]) != 1) {
        elapsed[0] = elapsed[0] + "s";
    }
    var timeSince = Math.round(elapsed[1]) + " ".concat(elapsed[0], " ago");
    return timeSince;
};
exports.handleTimeSince = handleTimeSince;
var handleTimeLength = function (gameDuration) {
    var minutes = Math.floor(gameDuration / 60);
    var seconds = (gameDuration % 60);
    return "".concat(minutes, "m ").concat(seconds, "s");
};
exports.handleTimeLength = handleTimeLength;
