import {PanelNode} from "./panel-node";

export class SubDishNode extends PanelNode{
    constructor(title:string) {
        super(20);
        this._title = title;
    }

}