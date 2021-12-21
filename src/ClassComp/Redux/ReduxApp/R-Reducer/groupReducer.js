export const groupReducer = (                                // reduce ke method se hi state ko manage kise krana hi ?state objevt manage
  state = { product: [], cart: [], selectedprod: [] },      ///store se data store krne ke lya group-reducer selected-product == action i deta viewDetails obect ko lake shote me save kiy
  action         
) => {
  if (action.type === "Add-Product") {
    return { ...state, product: [...action.data, ...state.product] };
  } //existing new product + previous prodct save rah ne ke liaya ...  ///porduct me home page ke produt

  if (action.type === "selected-Product") {
    return { ...state, selectedprod: [action.data] }; //action.data e dispatch se 
  } // selesedted product shw hone ke liya // action data = app product iintial data hjo API se ara raha he product show hona chahiya // in selected-prodct self deta hoga dynamic  [action.data]object me ayga deta and push in obj
  {
    if (action.type === "Remove-Product") {
      const fillteredProdcts = state.cart.filter(
        (item) => item !== action.data
      );
      return { ...state, cart: [...fillteredProdcts] };  /// card ke under ke value delet krna hi remove product se action.data
    }  // remove product fillted add to product me cart me fillted laga jo delet honge us product ko nikalho  not equal to jo aya nho product // return privious state ko update kro and show kro // removce product ke dispatch ek action leke j arha har ek click ke bad type output krha he deleted product ko nikal ka === remove>dispatch>action>renove prodct>fillterd> REmove krake > new state update> return 
  }
  if (action.type === "ADD-Cart") {
    return { ...state, cart: [...state.cart, ...action.data] };
  }  // state update hona chiuya and action .data ==//disptach method sate se len ahe or show krna ha cart 
  ///. acion add to crt object > reducer> actoin > add to cart> return state> old state ko merege krke > action .data mere kr ke old+ new state show krna hi

  //E.g add to cart kiya show on cart (... state.cart)<old state save krta he , and action .data krke new product Merege kr ke show odld+ new add atom show krta hi
  return state;
};








// next step Binding hogi in index me
