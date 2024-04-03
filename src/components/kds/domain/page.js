import {Column} from "./column";

export class Page{
    #columns:Array<Column>=[];
    #columns_qty:number=5;
    #height:number = 0;
    #width:number = 0;
    #min_column_width:number=220;
    #panels_hash:Map<number,number> = new Map();
    #index=0;
    constructor(height:number,width:number) {
        this.#height = height;
        this.#width = width;
        let columns_in_page = Math.floor(width/this.#min_column_width);
        this.#columns_qty = (columns_in_page>=5)?this.#columns_qty:columns_in_page;
        for (let i=0;i<this.#columns_qty;i++){
            this.#columns.push(new Column(this))
        }
    }

    get columns(){
        return this.#columns;
    }
    get height(){
        return this.#height;
    }
    addPanel(id)
    {
        if(!this.#panels_hash.has(id)) {
            this.#panels_hash.set(id, ++this.#index);
        }
    }
    panelIndexById(panelId){
        return this.#panels_hash.get(panelId);
    }
    get panels()
    {
        return this.#panels_hash.size;
    }

}