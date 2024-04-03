import {PanelNode} from "./panel-node";
export class MainDishNode extends PanelNode{
    constructor(title:string) {
        super(40);
        this._title = title;
    }
}