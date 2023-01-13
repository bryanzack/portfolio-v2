"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleHover = (tabs, mouse_event, tab_name) => {
    let tabsToReturn = [];
    if (mouse_event === 'enter') {
        console.log('mouse enter');
        tabs.forEach((tab) => {
            tabsToReturn.push(tab);
        });
    }
    else if (mouse_event === 'leave') {
        console.log("mouse leave");
        tabsToReturn.push(tab_name);
    }
    return tabsToReturn;
};
exports.default = handleHover;
