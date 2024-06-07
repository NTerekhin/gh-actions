import React from "react";
import {DialogReference} from "../referance/dialog-reference";
import type {IDialogReference} from "../referance/dialog-reference";

interface OnAction {
    (index: IDialogReference): void;
}

interface OnClose {
    (dlgId: string): void
}

export default class ModalDialogService {
     static #instance: ModalDialogService
    static #init = false;

    constructor() {
        if(!ModalDialogService.#init)
            throw new Error('The constructor is private, please use Score.makeNewScore.');
    }
    static getInstance(): ModalDialogService {
        ModalDialogService.#init = true;
        if (!ModalDialogService.#instance) {
            ModalDialogService.#instance = new ModalDialogService()
        }

        return ModalDialogService.#instance
    }
    Show<P>(Dialog: React.Component<P>, props: P) {
        return new Promise((resolve) => {
            const dlg = new DialogReference(crypto.randomUUID(),this, Dialog, props, resolve);
            this._onShow(dlg);
        })
    }

    set onShow(value: OnAction) {
        this._onShow = value;
    }

    set onClose(value: OnClose) {
        this._onClose = value;
    }

    _onClose: OnClose = () => {}
    _onShow: OnAction = () => {}
}


