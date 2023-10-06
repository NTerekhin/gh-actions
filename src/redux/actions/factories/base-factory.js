import Action from "../action";

export default class BaseFactory{
    getAction(action){
        return new Action();
    }
    static mapper(component)
    {
        return component;
    }
}
export {BaseFactory as DefaultFactory }