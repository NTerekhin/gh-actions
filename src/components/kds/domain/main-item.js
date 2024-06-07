import {Item} from "./item";

export class MainItem extends Item{
    #modifiers:Array<Item> = []

    constructor(name: string, modifiers: Array<Item>) {
        super(name);
        this.#modifiers = modifiers;
    }

    get modifiers()
    {
        return this.#modifiers;
    }
    set modifiers(modifiers:Array<Item>)
    {
        this.#modifiers = modifiers;
    }
}