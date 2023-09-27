export default class Action{
    static TYPE = 'DEFAULT';
    execute(state){
        return state;
    }
    static toDispatch(){
        return ()=>({type:this.TYPE,factory:this.TYPE});
    }
}