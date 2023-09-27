import Action from "../action";

export default class CounterAction extends Action{
    static toDispatch(factoryName){
        return ()=>({type:this.TYPE,factory:factoryName});
    }
}