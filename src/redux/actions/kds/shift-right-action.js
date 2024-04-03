import KdsAction from "./kds-action";

export default class ShiftRightAction extends KdsAction{
    static TYPE = 'SHIFT_RIGHT';
    #payload = null;
    constructor(payload) {
        super();
        this.#payload = payload;
        console.log(this.#payload)
    }
    execute(state) {
        if(!this.#payload) return state;
        const {total_pages,total_page_panels} = this.#payload;

        if((state.shift_numbers+1) < Math.ceil(total_page_panels/8)) {
            return {
                ...state,
                shift_numbers: state.shift_numbers + 1
            };
        }

        return  {
            ...state,
            counter:(state.counter + 1) > total_pages ? total_pages : (state.counter + 1),
            shift_numbers: 0
        };
    }

   static toDispatch(factoryName)
   {
       let obj = super.toDispatch(factoryName)();
       return (param)  =>({
           ...obj,
           payload:param
       })
   }

}