import type ModalDialogService from "../service/modal-dialog-service";

export interface IAlertDialogProps{
    dlgId:string;
    resolve:any;
    dlgService:ModalDialogService;
}