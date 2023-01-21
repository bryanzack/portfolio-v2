"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateSpell = void 0;
const translateSpell = (id) => {
    switch (id) {
        case 21: // barrier
            return "SummonerBarrier";
            break;
        case 1: // cleanse
            return "SummonerBoost";
            break;
        case 14: // ignite
            return "SummonerDot";
            break;
        case 3: // exhaust
            return "SummonerExhaust";
            break;
        case 4: // flash
            return "SummonerFlash";
            break;
        case 6: // ghost
            return "SummonerHaste";
            break;
        case 7: // heal
            return "SummonerHeal";
            break;
        case 13: // clarity
            return "SummonerMana";
            break;
        case 30: // poro recall?
            return "SummonerPoroRecall";
            break;
        case 31: // poro toss
            return "SummonerPoroThrow";
            break;
        case 11: // smite
            return "SummonerSmite";
            break;
        case 39: // snowball urf
            return "SummonerSnowURFSnowball_Mark";
            break;
        case 32: // snowball
            return "SummonerSnowball";
            break;
        case 12: // teleport
            return "SummonerTeleport";
            break;
        case 54: // placeholder
            return "Summoner_UltBookPlaceholder";
            break;
        case 55: // smite placeholder
            return "Summoner_UltBookSmitePlaceholder";
            break;
        default:
            return "error";
            break;
    }
};
exports.translateSpell = translateSpell;
