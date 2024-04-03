import type {PanelNode} from "../panel-nodes/panel-node";
import React from "react";

export class Panel{
    #id:number;
    #panel_height=50;
    #height:number = 0;
    #dishes:Array=[];
    #dish_height:number=25;
    #title:string='';
    #main_panel=null;
    #child_panel=null;
    constructor(id,title) {
        this.#id = id;
        this.#title = title;
        this.#height = this.#panel_height;
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

    addDishes(dishes:Array){
        this.#dishes = dishes;
        this.#height= this.#panel_height+dishes.length*this.#dish_height;
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
    get panelHeight(){
        return this.#panel_height;
    }
    showIndex(transparent_index,shift_numbers_index)
    {
        if (this.mainPanel === null || transparent_index.idx===0)
            ++transparent_index.idx;

        if (transparent_index.idx>=shift_numbers_index+8*shift_numbers_index && transparent_index.idx <= 8*(shift_numbers_index+1))
            return <div className="panel-index">{transparent_index.idx}</div>;

        return <></>;
    }
}