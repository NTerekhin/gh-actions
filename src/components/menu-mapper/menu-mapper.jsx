import Menu from './data.json'
import {SelectionHistoryService} from "./selection-history-service";

export const MenuMapper =()=>{

    const selectionHistoryService = new SelectionHistoryService(Menu)
    const selectionHistory =  selectionHistoryService.build(1658);

    console.log(selectionHistory);
    console.log("TOOLS");
    console.log("FEATURE-33")
    console.log("HOTFIX-7777")
    console.log("FEATURE-34")
    console.log("HOTFIX-666666")
    return (Menu.menu.id);
}
