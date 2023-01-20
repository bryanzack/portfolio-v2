"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTimeLength = exports.handleTimeSince = void 0;
const handleTimeSince = (seconds_elapsed) => {
    let minutesElapsed = seconds_elapsed / 60;
    let hoursElapsed = minutesElapsed / 60;
    let daysElapsed = hoursElapsed / 24;
    let weeksElapsed = daysElapsed / 7;
    let monthsElapsed = weeksElapsed / 4.3;
    let yearsElapsed = monthsElapsed / 12;
    let times = {
        "second": seconds_elapsed,
        "minute": minutesElapsed,
        "hour": hoursElapsed,
        "day": daysElapsed,
        "week": weeksElapsed,
        "month": monthsElapsed,
        "year": yearsElapsed
    };
    let elapsed = ["", 0];
    for (let time in times) {
        if (elapsed[1] === 0 || times[time] < elapsed[1] && times[time] >= 1) {
            elapsed[0] = time;
            elapsed[1] = times[time];
        }
    }
    if (Math.round(elapsed[1]) != 1) {
        elapsed[0] = elapsed[0] + "s";
    }
    return Math.round(elapsed[1]) + ` ${elapsed[0]} ago`;
};
exports.handleTimeSince = handleTimeSince;
const handleTimeLength = (gameDuration) => {
    let minutes = Math.floor(gameDuration / 60);
    let seconds = (gameDuration % 60);
    return `${minutes}m ${seconds}s`;
};
exports.handleTimeLength = handleTimeLength;
