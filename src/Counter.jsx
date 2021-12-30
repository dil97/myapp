import React,{useState, useEffect} from 'react';

export const Counter = () => {
   const [count , setCount]= useState(0);
    return (
        <div>
            <h1>Count :{count}</h1>
            <button disabled={!(count>0)}   onClick={()=> setCount(count-1)}>Decrement</button>
            <button disabled={!(count <10)}onClick={()=> setCount(count+1)}>Incremenrt</button>
            <button disabled={!(count <10)}onClick={()=> setCount(count+1*count)}>Incremenrt</button>


            
        </div>
    );
};

export default Counter;