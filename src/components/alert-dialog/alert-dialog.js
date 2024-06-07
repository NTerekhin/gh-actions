import React from "react";
import {NtDialog} from "../dialog/nt-dialog";
import type {IAlertDialogProps} from "../dialog/interfaces/i-alert-dialog";
import {DialogResult} from "../dialog/result/dialog-result";


export default class AlertDialog extends React.Component<IAlertDialogProps>{

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    handleClose = ()=>{
        this.props.dlgService._onClose(this.props.dlgId);
    }

    cancelAction =(index)=>{
        return <button key={index} onClick={()=>{ this.props.dlgService._onClose(this.props.dlgId);this.props.resolve(DialogResult.Cancel("Cancel"));}}>CANCEL</button>
    }
    okAction =(index)=>{
        return <button key={index} onClick={()=>this.props.resolve(DialogResult.Ok("OK"))}>OK</button>
    }

    render() {
        return <NtDialog title={"Alert Dialog"} open={true} onClose={this.handleClose} content={<div>Here is content</div>} actions={[this.okAction,this.cancelAction]}/>
    }
}