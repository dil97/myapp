import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {Card } from "react-bootstrap"
import { width } from 'dom-helpers';

const Apipr = () => {
    const[user , setuser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{console.log(res)
                setuser(res.data)})

                .catch((arr)=>console.log(arr))

    },[])
 

    return (
        <div style={{display:"flex" , flexWrap:"wrap"}}>
            <h1>This Are Employe data</h1>
            <br />
            <hr />
            { user.map((Naam)=> {
                    return(
                        <div style={{background:"pink" ,width:"250px" , margin:"50px",border:"solid 6px green "}}>
                            <h3>{Naam.id}</h3>
                            <h4>{Naam.name}</h4>
                            <h5>{Naam.username}</h5>
                            <h6>{Naam.email}</h6>
                        </div> )

                })
            }
               
            
            
        </div>
    );
};

export default Apipr;

