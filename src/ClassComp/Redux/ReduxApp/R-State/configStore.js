import { createStore , combineReducers } from "redux";
import { groupReducer } from "../R-Reducer/groupReducer";

export const configStore =()=>{
    const mystore = createStore(combineReducers({groupReducer}),
    window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
    );
    return mystore;
};