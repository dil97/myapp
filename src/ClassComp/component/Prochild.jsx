import React from "react";
import Gretchild from "./Gretchild";


export const Prochild = ({Id , mob}) => {
     return(
         <div>
             <Gretchild mob={mob}/>
           
            <h1> prochild this is {Id}</h1>
             <p>This is parent component of Props</p>
         </div>
     );
};
export default Prochild;