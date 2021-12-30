import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APICall = () => {
    const [albums , setAlbums] =useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{console.log(res.data) 
            setAlbums(res.data)})
        
        .catch((error)=>console.log("samaj===>",error));
        
    },[]);
    

    return (
        <div style={{display:"flex",flexWrap:"wrap",}}>
            {/* <h2>Fetching Data From API</h2> */}
            <h2>Welcome API Data !</h2>
            {
                albums.map((kyanam)=>{
                    return(
                        
                        <div style={{ width:"200px" ,
                        background:"orange",textAlign:"center",textShadow:"2px 5px 6px-8px pink",margin:"5px", border:"10px blue",borderRadius:"50px"}}>
                            <h4>{kyanam.title}</h4>
                            <h1>{kyanam.id}</h1>
                            <h3>{kyanam.title}</h3>
                
                        </div>
                    )
                })
            }

            
        </div>
    );
};

export default APICall;