import Menu from './data.json'
import {SelectionHistoryService} from "./selection-history-service";

export const MenuMapper =()=>{

    const selectionHistoryService = new SelectionHistoryService(Menu)
    const selectionHistory =  selectionHistoryService.build(1658);

    console.log(selectionHistory);
    console.log("TOOLS");
    console.log("HOTFIX")
    return (Menu.menu.id);
}
