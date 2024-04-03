import Action from "../action";

export default class KdsAction extends Action{
    static toDispatch(factoryName){
        return ()=>({type:this.TYPE,factory:factoryName});
    }
}