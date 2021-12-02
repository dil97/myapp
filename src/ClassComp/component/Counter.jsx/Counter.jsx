import React, {useState} from 'react';    
///, usestate why  manage funcation componet to use the Usestate..

const Counter = () => {


    const [count , setCount] = useState(0);
   


    return (
        <div>
            <h1>   Click Me </h1>
            {/* <button onClick={() =>  count>0 &&setCount (count-1)}    style={{color:"black" , background:"red"}}>Decrement</button> */}
            <p>{count}</p>
            <button onClick={() =>  count>0 &&setCount (count-1)}         style={{color:"black" , background:"red",padding:"20px" , margin:"10px", borderRadius:"30px"}}>Decrement</button>
            <button onClick={() => count<100 && setCount (count+1)}      style={{color:"black" , background:"green", padding:"20px", margin:"10px",borderRadius:"30px"}}>Increment</button>     
            <button onClick={() => setCount (count+1*count)}      style={{color:"black" , background:"yellow", padding:"20px", margin:"10px",borderRadius:"30px"}}>Multiplay</button>     
            <button onClick={() =>  setCount (count+1-count-1)}      style={{color:"black" , background:"gray", padding:"20px", margin:"10px",borderRadius:"30px"}}>Clear</button>     
            {/* // /// use external css kiya hi just for  showkes.// */}
            
        </div>
    );
};

export default Counter;