import "./App.css"
import React from "react";
import ConditionalRender from "./ClassComp/Propss/ConditionalRender/ConditionalRender";

// import Poperty from "./ClassComp/component/comp2/Poperty";
// import {Prop} from "./ClassComp/component/Prop"

// import FilteredEmp from "./ClassComp/component/comp2/FilteredEmp";
import Counter from "./ClassComp/component/Counter.jsx/Counter";

// import Mappingpra from "./ClassComp/component/Mappingpra";

// import MappingParent from "./ClassComp/component/funcation/MappingParent";




import { Pclass } from "./ClassComp/component/funcation/Pclass";
// import { Practi } from "./ClassComp/component/funcation/Practi";

// import { Parent_pro } from "./ClassComp/Propss/Parent_pro";

function App() {
    // const userName = "JOHN"
    // const userId = 4877;
    // const userMobile= 9876543210;
    // const usercity="Nanded"
  return (
    <div className="App">


      {/* <Prop name={userName} id={userId} mob={userMobile} />
      <Poperty  city ={usercity}/> */}
        {/* <Parent_pro/> */}
         {/* <Pclass/> */}
        {/* <Practi/> */} */

        {/* <MappingParent/> */}
        {/* <Mappingpra/> */}
        {/* <FilteredEmp/> */}
       <Counter/>
        <ConditionalRender/> 
      

    </div>
  );
}

export default App;
