import React, { useState , useEffect} from 'react';
import axios from 'axios';

// API throungh Axios your data and set .get url('') and .then-me ek reponse attom dega 
// josn object sotre in (res) if any key name to give y 
// catch method h0w t0 find error  ""

const API = () => {
    const[resData, setResData]= useState();
    console.log("resData" , resData);
    useEffect (()=>{
        axios.get("https://fakestoreapi.com/products").then ((res)=>{
          setData(res)
          // console.log(res.data);
        });
      },[])
 
    return (
        <div>
            <h1>Fetcing data from API</h1>
            <h3>Title : </h3>
            <p>Body:</p>

            
        </div>
    );
};

export default API;