import KdsAction from "./kds-action";

export default class ShiftLeftAction extends KdsAction{
    static TYPE = 'SHIFT_LEFT';
    execute(state) {

        if((state.shift_numbers-1) >= 0) {
            return {
                ...state,
                shift_numbers: state.shift_numbers - 1
            };
        }

        let counter = (state.counter-1)
        if(counter<0) counter = 0;
        return  {
            ...state,
            counter:counter
        };
    }
}