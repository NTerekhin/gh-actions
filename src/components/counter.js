import CounterActionsFactory from "../redux/actions/factories/counter-actions-factory";
import React, {useContext, useEffect, useState} from "react";
import {ModalDialogContext} from "./dialog/provider/modal-dialog-provider";
import type {ModalDialogService} from "./dialog/service/modal-dialog-service";
import AlertDialog from "./alert-dialog/alert-dialog";




const Counter = ({counter, inc, dec, rnd}) => {
    const [loading, setLoading] = useState(true);
    const modalDialogService: ModalDialogService = useContext(ModalDialogContext);

    const showDialog = async () => {
        // eslint-disable-next-line no-mixed-operators
        const res = await modalDialogService.Show(AlertDialog);

        console.log(res);
    }
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const process = async ()=>{
        await sleep(10000)
        setLoading(false);
        return "OK";
    }
    useEffect(()=>{
        const fetchData = async ()=>{
          const result = await process();
          console.log(result);
        }
        fetchData();
    },[])


    if(loading)
        return <div>Loading....</div>

    return (
        <div className="counter">

            <h2>{counter}</h2>
            <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
            <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={() => rnd('hello')} className="btn btn-primary btn-lg">RND</button>
            <button onClick={()=>showDialog()} className="btn btn-warning btn-lg">Show Dlg</button>
        </div>
    );
}

export default CounterActionsFactory.mapper(Counter);