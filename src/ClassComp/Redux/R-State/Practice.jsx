// import {creatStore , combineReducers} from "redux";
// import {creatReducer} from"./creatReducer";
// import {productReducer} from"./productReducer";
// const Practice =()=>{
//     const ourStore= creatStore (combineReducers({
//        productReducer,creatReducer },
//        window.__REDUX_DEVTOOLS_EXTENSTION__&& Window.__REDUX_DEVTOOLS_EXTENSTION__())
//        );

//        return ourStore;
// };




// export const productReducer = ([state ] , action)=>{
// if ( action.type ==="ADD PRODUCT"); {
// return(...state,(...action addproduct:[ action.data]));
// }

//     if (action.type ==="SELECTED PRODUCT" );{
//     return(...state,(...action,selectedproduct:[action.data])) 
// }

//     if (action.type ==="REMOVED PRODUCT");{
//  return(...state,(...filltered((item)=> product !==item )));
//     }
//  return state;
// }


// import { Provider } from "react-redux";
// import { configStore } from "./ConfigStore";
// import reactDom from "react-dom";
// const provider=
// reactDom(
//     <Provider>

//         </App>

//     </Provider>
// )


// productReducer.js 

// export const productReducer=(state={product:[]} , action)=>{
//     if (action.type==="ADD_PRODUCT") {
//             return{ ...state,product:[...action.data]};
//     }

//      if (action.type ==="SELECT_PRODUCT") {
//             return{...state,product:[...action.data]};
//         }
//     if (action.type ==="REMOVE_PRODUCT") {
//             const fillter = state.product.filter((mast)=> mast !==action.data);
//             return{...state,product:[...fillter]};    
    
    
//     }

// }


// configStore

// import {createStore , combineReducer} from "redux";
// import { prdocutReducer } from "../R-Reducer/productReducer";


// export const ConfingStore =()=>{
//     const mystore= creatStore(combineReducers({productReducer}),

//         windo.__REDUX_DEVTOOLS_EXTENSTION__ && windo.__REDUX_DEVTOOLS_EXTENSTION__()
//     );
//     return mystore;
// } 

// import { Provider } from "react-redux";
// import { configStore } from "./ConfigStore";
// import{productReducer} from "../R-Reducer/productReducer"

// const configStore={localStorage}

// <Provider
















