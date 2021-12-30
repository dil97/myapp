export const groupReducer = (
    state= {product:[] ,cart:[], selectedproduct:[] , Add:[]},
    action             // key product:[assing value is empty value]// cart is a key:[assing value empty array],add is ake []
)=>{
    if (action.type ==="Add-Product") {
        return{...state , product:[...state.product ,...action.data]}
    }      // what action is recived strick check  ,, state is rewrite owerall state current state & spred...state 
            //spred in obje spreded it leteral now inside the object i u nkow if yo going to replace your key       [...action.data]==i.e called array of object
    if(action.type ==="Selected-Product") {
        return {...state , selectedproduct:[action.data]}
    } /// spared kr ne ki jarutrat nhi item jo ajega o single ayehga dynaymic object ayega parent se maping krke 
    
     if(action.type ==="Add-Cart") {
         return{...state,cart:[{...action.data,key:state.cart.length},...state.cart],};  //cart ke arry ke under jane ke phale key genertate ho rahi and goto cart this key // action.data ka literal draw krne wale hi imagine object=={id:2 , title:"something" , image:"url"}   >>o/p {id:2 , title}
     }  // override kr rhe same key hi to Over-Ride priviuos value replace to new key// array ke under fir object chiya no required spread but spread operator privious state ko save krn hi cart me 
     if (action.type ==="Remove-Product") {
        const filltered = state.cart.filter((item)=> item !== action.data);                //!== jo delet hogy vo chodke baki sub......
        return{ ...state, cart:filltered}; // return ==>cart ek array hoga fillted to array inside arrya ayega spread krna hi [...filltred] or  also use same -cart:filtered ek khud array ha esliya use
     }// use cart becuase cart me se product add and Removce kr ne hi delet chode ke baki object show krn a hi fillted exsiting card pr laaga na  hi  ( !== nhi )to sotre kro 1=4  hi ky nhi to save kro e.g 4=4 aya to save nhi krna.

     return state;

}

/// reduse is a pure component action is recied from dispatch we need to update of state all key to inset in reducer
// return in  is >>> object , overRide the key value ... product ke under array hoga and us me key:[]   ager spread kya to key:[...action.data]
// Remove cart in side to to addd prodiuse 1 but initial value is 0 we next action on add product that value 1 + 2+3 as show in cart