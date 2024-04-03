import type {PanelNode} from "../panel-nodes/panel-node";

export class Panel{
    #id:number;
    #nodes:Array<PanelNode>=[];
    #height:number = 50;
    #dishes:Array=[];
    #dish_height:number=25;
    #title:string='';
    #main_panel=null;
    #child_panel=null;
    constructor(id,title) {
        this.#id = id;
        this.#title = title;
    }
    addNode(node:PanelNode){
        this.#nodes.push(node);
        this.#height+=node.height
    }
    get nodes(){
        return this.#nodes;
    }
    get height(){
        return this.#height;
    }
    set height(height:number){
        this.#height = height;
    }
    get id()
    {
        return this.#id;
    }
    get title()
    {
        return this.#title;
    }
    addNodes(nodes:Array<PanelNode>)
    {
        this.#nodes = nodes;
        this.#height = nodes.length*nodes[0].height;
    }
    addDishes(dishes:Array){
        this.#dishes = dishes;
        this.#height+=dishes.length*this.#dish_height;
    }
    get dishHeight()
    {
        return this.#dish_height
    }
    get childPanel(){
        return this.#child_panel;
    }
    set childPanel(panel:Panel){
        this.#child_panel = panel;
    }
    get mainPanel(){
        return this.#main_panel;
    }
    set mainPanel(panel:Panel)
    {
        this.#main_panel = panel;
    }
    get dishes(){
        return this.#dishes;
    }
}