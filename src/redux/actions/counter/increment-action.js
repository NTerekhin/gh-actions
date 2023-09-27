import CounterAction from "./counter-action";

export default class IncrementAction extends CounterAction{
    static TYPE = 'INC';
    execute(state) {
        return  {
            ...state,
            counter:state.counter +1
        };
    }
}