import React ,{useState} from "react";

const Counter = () => {

    const [count , setcount] = useState ()


    return(
        <div>

                <button onClick={()=> setcount (count+1)}>ADD</button>

                <h1>click me {count}</h1>

                <button onClick ={()=> setcount (count-1)}>Min</button>



                </div>
    )
}