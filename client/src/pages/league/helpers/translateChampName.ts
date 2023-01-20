// this is necessary due to inconsistencies in the official Riot API
export const translateChampName = (name: string) => (
    (name === 'FiddleSticks') ? 'Fiddlesticks' : name
)