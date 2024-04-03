import KdsAction from "./kds-action";

export default class ShiftRightAction extends KdsAction{
    static TYPE = 'SHIFT_RIGHT';
    #board = null;
    constructor(board) {
        super();
        this.#board = board;
        console.log(this.#board)
    }
    execute(state) {
        let total_pages = 0;
        let shift_pages = 0;
        if(this.#board) {
            total_pages = this.#board.totalPages;
            shift_pages = Math.ceil(this.#board.pages[state.counter].panels/8);
        }

        let isShift = state.shift_numbers+1<shift_pages
        let counter = state.counter;
        let shift_numbers = state.shift_numbers;
        if(isShift)
            shift_numbers = state.shift_numbers+1;
        else {
            counter = (state.counter + 1) > total_pages ? total_pages : (state.counter + 1)
        }
        return  {
            ...state,
            counter:counter,
            shift_numbers: shift_numbers
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