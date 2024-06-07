import React, {useEffect, useState} from "react";
import ModalDialogService from "../service/modal-dialog-service";

export const ModalDialogContext =  React.createContext(undefined)



export const ModalDialogProvider =({children})=>{

    const modalDialogService =  ModalDialogService.getInstance();


    const [dialogsReferencesList, setDialogsReferencesList] = useState([]);


    modalDialogService.onShow = (dialogElement)=>{
        setDialogsReferencesList((prev)=>[...prev,dialogElement]);
    }

    modalDialogService.onClose = (dlgId)=>{
        const index = dialogsReferencesList.findIndex((ref)=>{return ref.dlgId===dlgId;});
        dialogsReferencesList.splice(index,1)
        setDialogsReferencesList([...dialogsReferencesList])
    }

    return (
        <ModalDialogContext.Provider value={modalDialogService}>
            {children}
            {
                dialogsReferencesList.map((dialogReference,i)=>{
                    return dialogReference.render()
                })
            }
        </ModalDialogContext.Provider>
    )

}