const handleHover = (tabs: string[], mouse_event: string, tab_name: string): string[] => {
    let tabsToReturn: string[] = [];
    if (mouse_event === 'enter') {
        console.log('mouse enter');
        tabs.forEach((tab: string) => {
            tabsToReturn.push(tab);
        });
    } else if (mouse_event === 'leave') {
        console.log("mouse leave");
        tabsToReturn.push(tab_name);
    }
    return tabsToReturn;
}

export default handleHover;