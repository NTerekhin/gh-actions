import BaseFactory from "./base-factory";
import {connect} from "react-redux";
import ShiftLeftAction from "../kds/shift-left-action";
import type Action from "../action";
import ShiftRightAction from "../kds/shift-right-action";
import KdsAction from "../kds/kds-action";


export default class KdsActionsFactory extends BaseFactory{
    static factoryName='KDS';

    getAction(action): Action {
            switch(action.type){
                case ShiftLeftAction.TYPE:
                    return new ShiftLeftAction();
                case ShiftRightAction.TYPE:
                    return new ShiftRightAction(action.payload);
                default:
                    return new KdsAction();
            }
    }
    static mapper(component)
    {
        const propsMapper = (state)=>{
            return{
            ...state
            }
        };
        const dispatchMapper={
           shiftLeft:ShiftLeftAction.toDispatch(this.factoryName),
           shiftRight:ShiftRightAction.toDispatch(this.factoryName)
        }

        return connect(propsMapper,dispatchMapper)(component);
    }
}