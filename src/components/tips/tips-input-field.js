import {useState} from "react";
import {CurrencyTextField} from "../currency/currency-text-field";

export const TipsInputField =() =>{
    const [tipsValue, setTipsValue ] = useState(0);

    return (
        <>
            Here is a tips amount: {tipsValue}
            <CurrencyTextField
            value={tipsValue}
            outputFormat='string'
            onChange={(amount)=>{ console.log("TIPS",amount); setTipsValue(amount)}}
        />
            </>
    )
}