export const handleTimeSince = (gameEndTimestamp: number, todayTimestamp: number) => {
    let secondsElapsed = Math.round((todayTimestamp - gameEndTimestamp) / 1000); // seconds since gameEndTimestamp
    let minutesElapsed = secondsElapsed/60;
    let hoursElapsed = minutesElapsed/60;
    let daysElapsed = hoursElapsed/24;
    let weeksElapsed = daysElapsed/7;
    let monthsElapsed = weeksElapsed/4.3;
    let yearsElapsed = monthsElapsed/12;
    let times: {[key: string]: number} = {
        "second": secondsElapsed,
        "minute": minutesElapsed,
        "hour": hoursElapsed,
        "day": daysElapsed,
        "week": weeksElapsed,
        "month": monthsElapsed,
        "year": yearsElapsed
    }
    let elapsed: [string, number] = ["", 0];
    for (let time in times) {
        if (elapsed[1] === 0 || times[time] < elapsed[1] && times[time] >= 1) {
            elapsed[0] = time;
            elapsed[1] = times[time];
        }
    }
    if (Math.round(elapsed[1]) != 1) {
        elapsed[0] = elapsed[0] + "s";
    }
    let timeSince = Math.round(elapsed[1]) + ` ${elapsed[0]} ago`;
    return timeSince;
}

export const handleTimeLength = (gameDuration: number) => {
    let minutes = Math.floor(gameDuration/60);
    let seconds = (gameDuration%60);
    return `${minutes}m ${seconds}s`;
}