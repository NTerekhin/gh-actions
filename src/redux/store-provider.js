import {Provider} from "react-redux";
import ActionsFactories from "./actions-factories";
import {configureStore} from "@reduxjs/toolkit";

const initialState = {
    counter:0,
    shift_numbers:0
}
export const StoreProvider = ({children})=>{

    const stateMachine = (state=initialState,action)=>{
        console.log(action);
        return ActionsFactories.getActionFactory(action.factory).getAction(action).execute(state);
    }
    const store = configureStore({reducer:stateMachine});

    return <Provider store={store}>{children}</Provider>

}