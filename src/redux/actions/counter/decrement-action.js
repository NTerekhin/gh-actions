import CounterAction from "./counter-action";

export default class DecrementAction extends CounterAction{
    static TYPE = 'DEC';
    execute(state) {
        return {
            ...state,
            counter:state.counter-1
        };
    }
}