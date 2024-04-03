import type {Panel} from "./panel";
import type {Page} from "./page";

export class Column{
    #column_height:number = 0;
    #panels:Array<int>=[];
    #page:Page =null;
    constructor(page:Page) {
        this.#page = page;
        this.#column_height = page.height;
    }
    addPanel(panel:Panel):Panel{
            this.#panels.push(panel);
            this.#column_height -= panel.height;
            this.#page.addPanel(panel.id);
    }

    get height()
    {
        return this.#column_height;
    }
    get panels()
    {
        return this.#panels;
    }
}