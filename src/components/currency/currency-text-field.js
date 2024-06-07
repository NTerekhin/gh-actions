import {InputAdornment, TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import AutoNumeric from "autonumeric";
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    textField: props => ({
        textAlign: props.textAlign || "right",
    }),
}));

export const CurrencyTextField =(props)=>{
    const inputFieldRef = useRef(null);
    const [autoNum, setAutoNum] = useState(undefined)
    const classes = useStyles();

    useEffect(() => {
            setAutoNum(new AutoNumeric(inputFieldRef.current,0, {
                alwaysAllowDecimalCharacter: true,
                caretPositionOnFocus: "end",
                createLocalList: false,
                decimalPlacesRawValue: 2,
                decimalPlacesShownOnBlur: 2,
                decimalPlacesShownOnFocus: 2,
            }))
    }, []);

    useEffect(()=>{
        return ()=> {if(autoNum) autoNum.remove();}
    },[autoNum])

    const getNumericValue = ()=>{

        if(autoNum===undefined) return;
        const valueMapper = {
            string: numeric => numeric.getNumericString(),
            number: numeric => numeric.getNumber(),
        }
        return valueMapper[props.outputFormat](autoNum)
    }

    const eventHandler =(event, eventName)=>{
        if(!props.hasOwnProperty(eventName)) return;

        props[eventName](getNumericValue());
    }
    return (
        <>
             <TextField inputRef={inputFieldRef}
                        variant={'standard'}
                        onChange={e => eventHandler(e, "onChange")}
                        onFocus={e => eventHandler(e, "onFocus")}
                        onBlur={e => eventHandler(e, "onBlur")}
                        onKeyUp={e => eventHandler(e, "onKeyUp")}
                        onKeyDown={e => eventHandler(e, "onKeyDown")}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">$</InputAdornment>
                       ),

                   }}
                        inputProps={{
                            className: classes.textField
                        }}
        />
            </>
    )
}