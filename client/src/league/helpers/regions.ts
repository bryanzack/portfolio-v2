interface Region {
    abbreviation: string,
    name: string,
}
interface RegionList {
    [region_code: string]: Region,
}
export const Regions: RegionList = {
    "br1": {
        abbreviation: "BR",
        name: "Brazil",
    },
    "eun1": {
        abbreviation: "EUNE",
        name: "Europe Nordic & East",
    },
    "euw1": {
        abbreviation: "EUW",
        name: "Europe West",
    },
    "la1": {
        abbreviation: "LAN",
        name: "Latin America North",
    },
    "la2": {
        abbreviation: "LAS",
        name: "Latin America South",
    },
    "na1": {
        abbreviation: "NA",
        name: "North America",
    },
    "oc1": { // ALSO SAYS OC1 IS CODE?
        abbreviation: "OCE",
        name: "Oceania",
    },
    "ru": {
        abbreviation: "RU",
        name: "Russia",
    },
    "tr1": {
        abbreviation: "TR",
        name: "Turkey",
    },
    "jp1": {
        abbreviation: "JP",
        name: "Japan",
    },
    "kr": {
        abbreviation: "KR",
        name: "Republic of Korea",
    },
    "ph2": {
        abbreviation: "PH",
        name: "The Philippines",
    },
    "sg2": {
        abbreviation: "SG",
        name: "Singapore, Malaysia, & Indonesia",
    },
    "tw2": {
        abbreviation: "TW",
        name: "Taiwan, Hong Kong, and Macao",
    },
    "th2": {
        abbreviation: "TH",
        name: "Thailand",
    },
    "vn2": {
        abbreviation: "VN",
        name: "Vietnam",
    },
    "pbe": {
        abbreviation: "PBE",
        name: "Public Beta Environment",
    },
}

export default Regions;