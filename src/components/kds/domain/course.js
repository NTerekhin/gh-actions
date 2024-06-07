import type {Item} from "./item";

export class Course{
    #items:Array<Item> =[]
    #title:string=""
    #mainCourse = null;
    #childCourse = null;


    constructor(items: Array<Item>, title: string) {
        this.#items = items;
        this.#title = title;
    }

    get items(){
        return this.#items;
    }
    set items(items:Array<Item>){
        this.#items = items;
    }
    addItem(item:Item)
    {
        this.#items.push(item);
    }
    get title()
    {
        return this.#title;
    }

    get mainCourse()
    {
        return this.#mainCourse;
    }

    set mainCourse(mainCourse){
        this.#mainCourse = mainCourse;
    }
    get childCourse()
    {
        return this.#childCourse;
    }
    set childCourse(childCourse)
    {
        this.#childCourse = childCourse;
    }

}