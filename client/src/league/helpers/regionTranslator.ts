interface Region {
    abbreviation: string,
    full_name: string,
}
interface RegionList {
    [region_code: string]: Region,
}
export const Regions: RegionList = {
    "br1": {
        abbreviation: "BR",
        full_name: "Brazil",
    },
    "eun1": {
        abbreviation: "EUNE",
        full_name: "Europe Nordic & East",
    },
    "euw1": {
        abbreviation: "EUW",
        full_name: "Europe West",
    },
    "la1": {
        abbreviation: "LAN",
        full_name: "Latin America North",
    },
    "la2": {
        abbreviation: "LAS",
        full_name: "Latin America South",
    },
    "na1": {
        abbreviation: "NA",
        full_name: "North America",
    },
    "oc1": { // ALSO SAYS OC1 IS CODE?
        abbreviation: "OCE",
        full_name: "Oceania",
    }
}
