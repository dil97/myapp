import React,{useState , useEffect} from "react";
import axios from "axios";

const AsyncAndAwait =()=>{
    const [data , setdata]=useEffect([]);

    const calldata=async()=>{
        const result= await axios.get("")
                setdata(result.data);
    }
    useEffect(()=>{

        calldata();
    },[])

    return(
        <div>
            <h1>This is Async and Await way data fetchign</h1>
             {data.map((dil)=>{
                       return(
                 <div>
                         <h2>{dil.title}</h2>
                        <h2>{dil.id}</h2>
                        <h2>{dil.name}</h2>
                 </div>
             )}
                    
                     )}
        </div>
    )
   
}
