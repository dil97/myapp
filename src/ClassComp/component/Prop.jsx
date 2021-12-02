import React from "react";
import Prochild from "./Prochild";


export const Prop = ({name,id,mob}) => {
    
 
     return(
         <div>
             <h1>This is Parent</h1>
             <h3>My Name is {name}</h3>
             
             <Prochild id={id} mob={mob}/>
           
      
         </div>
     );
};
export default Prop;