import KdsAction from "./kds-action";

export default class ShiftLeftAction extends KdsAction{
    static TYPE = 'SHIFT_LEFT';
    execute(state) {
        let counter = (state.counter-1)
        if(counter<0) counter = 0;
        return  {
            ...state,
            counter:counter
        };
    }
}