import { getRoles } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const UseEffectParent = () => {

    const[data,setData] = useState(0);
    const [text,setText] = useState(0)  
    

    useEffect(()=> {
         
        console.log ("useEffect without dependency")


    },[text,data]);

        return (
            <div>
                <h1>Life Cycle Method By UsingFunctional Component {data} </h1>
                <button style={{backgroundColor:"red",fontSize:"50px",borderColor:"green' solid 20px" }} onClick={()=>setData(data +1 )} >Update</button>
            </div>
        );
    
}

export default UseEffectParent;