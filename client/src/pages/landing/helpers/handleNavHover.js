"use strict";
exports.__esModule = true;
var handleHover = function (tabs, mouse_event, tab_name) {
    var tabsToReturn = [];
    if (mouse_event === 'enter') {
        console.log('mouse enter');
        tabs.forEach(function (tab) {
            tabsToReturn.push(tab);
        });
    }
    else if (mouse_event === 'leave') {
        console.log("mouse leave");
        tabsToReturn.push(tab_name);
    }
    return tabsToReturn;
};
exports["default"] = handleHover;
