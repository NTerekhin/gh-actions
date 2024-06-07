
export class Item{
    #name:string="";


    constructor(name: string) {
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}