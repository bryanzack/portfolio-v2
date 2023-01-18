export const handleTimeSince = (seconds_elapsed: number) => {
    let minutesElapsed = seconds_elapsed/60;
    let hoursElapsed = minutesElapsed/60;
    let daysElapsed = hoursElapsed/24;
    let weeksElapsed = daysElapsed/7;
    let monthsElapsed = weeksElapsed/4.3;
    let yearsElapsed = monthsElapsed/12;
    let times: {[key: string]: number} = {
        "second": seconds_elapsed,
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
    return Math.round(elapsed[1]) + ` ${elapsed[0]} ago`;
}

export const handleTimeLength = (gameDuration: number) => {
    let minutes = Math.floor(gameDuration/60);
    let seconds = (gameDuration%60);
    return `${minutes}m ${seconds}s`;
}