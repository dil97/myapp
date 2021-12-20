import { act } from "redux";

export const prdocutReducer=(state={prdocut: []},action)=>{                              // action is coming throung the HOOKs
  if (action .type === "ADD_PRODUCT") {
      return {...state,product:[...action.data]};   
  }

  if (action.type ==="REMOVE_PRODUCT") {
     const filltred = state.product.filltred((value)=> value !==action.data);  //sop !==  notX shoes  nhi to sop save in soap.
     return {...state,product:[...filltred]};
  }
  if (action.type === "SELECTED_PRODUCT") {
    return{...state,product:[...action.data]};
  }

};

// on clickn add dispactch button to use dispatch hook ;
// const dispatch = useDisptach() 
// use selector to give value of   

//
import {act} from "redux";

export const productRedcuer=(state={product:[]},action) =>{
  if (action.type === "ADD_PRODCT"){
    return{...state,prodct:[...action.data]};
  }
  if (action.type ==="REMOVE_PRODUCT") {
    const filltred=state.product.filltred((item)=> item !==action.data);
    return{...state,prodct:[...action.data]}
  }
  if (action.type==="SELECTED_PRODUCT"){
    return{...state,prodct:[...action.data]}

  }
  return mystore;
}