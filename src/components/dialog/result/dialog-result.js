
export class DialogResult<T>{
    #result:T;
    #cancelled: boolean;
     constructor(result:T, cancelled:boolean) {
         this.#result = result;
         this.#cancelled = cancelled;
    }
    // eslint-disable-next-line no-use-before-define
    static Ok<T>(result:T):DialogResult {
        return new DialogResult(result,false)
    }
    // eslint-disable-next-line no-use-before-define
    static Cancel<T>(reason:T):DialogResult{
         return new DialogResult(reason,true);
    }
}