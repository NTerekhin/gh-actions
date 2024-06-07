import type {ModalDialogService} from "../service/modal-dialog-service";
import type {DialogResult} from "../result/dialog-result";

export interface IDialogReference {
    render:()=>{}
}

export class DialogReference<T> implements IDialogReference {
    #id:string = '';
    #dialogService:ModalDialogService = null;
    Dialog:React.ReactNode = null;
    #result:DialogResult = null
    #dialogProps:T = {}
    #dialogResolver:()=>{}


    constructor(id,dialogService: ModalDialogService,dialog:React.ReactNode,dialogProps:T,resolve=()=>{}) {
        this.#dialogService = dialogService;
        this.#id = id;
        this.Dialog =dialog;
        this.#dialogProps =dialogProps;
        this.#dialogResolver = resolve
    }

    render(){
        return <this.Dialog key={this.#id} dlgId={this.#id} {...this.#dialogProps} resolve={this.#dialogResolver} dlgService={this.#dialogService}/>
    }

    set result(result:DialogResult){
        this.#result = result;
    }
    get result(){
        return this.#result;
    }

    get dlgId()
    {
        return this.#id;
    }
}