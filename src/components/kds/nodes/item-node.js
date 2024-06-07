export class ItemNode{
    #data = {}
    #parentNode = null;
    #childNode = null;
    constructor(data: {}) {
        this.#data = data;
    }

    get data(){
        return this.#data;
    }

    set parent(parentNode){
        this.#parentNode = parentNode;
    }
    get parent(){
        return this.#parentNode;
    }

    set child(childNode){
        this.#childNode = childNode;
    }
    get child(){
        return this.#childNode;
    }
}