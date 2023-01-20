import * as runesReforged from '../static/runesReforged.json';
import * as perks from '../static/perks.json';
const rune_base = 'https://ddragon.leagueoflegends.com/cdn/img/';
export const translateSecondary = (id: number) => {
    let rune_path = "";
    Object.keys(runesReforged).map((rune: string, index: number) => {
        if (runesReforged[index].id === id)
            rune_path = runesReforged[index].icon;
    });
    return `${rune_base}${rune_path}`;
}

export const translatePrimary = (id: number) => {
    let rune_path = "";
    for (let toplevel in perks) {
        if (perks[toplevel].id === id) {
            rune_path = perks[toplevel].iconPath.replace('/lol-game-data/assets/v1/', '');
        }
    }
    return `${rune_base}${rune_path}`;
}