import IncrementAction from "../counter/increment-action";
import DecrementAction from "../counter/decrement-action";
import RandomAction from "../counter/random-action";
import CounterAction from "../counter/counter-action";
import {connect} from "react-redux";
import BaseFactory from "./base-factory";

export default class CounterActionsFactory extends BaseFactory{
    static factoryName = 'COUNTER';

    getAction(action){
        switch(action.type){
            case IncrementAction.TYPE:
                return new IncrementAction();
            case DecrementAction.TYPE:
                return new DecrementAction();
            case RandomAction.TYPE:
                return new RandomAction(action.payload);
            default:
                return new CounterAction();
        }
    }
    static mapper(component)
    {
        const propsMapper = (state)=>{
            return{
                counter:state.counter
            }
        }
        const dispatchMapper={
            inc:IncrementAction.toDispatch(this.factoryName),
            dec:DecrementAction.toDispatch(this.factoryName),
            rnd:RandomAction.toDispatch(this.factoryName)
        }
             return connect(propsMapper,dispatchMapper)(component);
    }
}