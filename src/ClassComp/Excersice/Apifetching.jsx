import React,{useState , useEffect} from "react";
import axios from "axios";

const Apifetching =()=>{
    const[albums, setAlbums]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{console.log(res.data)
        setAlbums(res.data)})
        .catch((error)=>console.log(error))
        
       
    },[])


    return(
        <div>
            <h1>this is DAta Fetching</h1>

            {
                albums.map((dil)=>{
                    return(
                        <div>
                            <h3>{dil.title}</h3>
                            <h3>{dil.id}</h3>
                            <h3>{dil.userId}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}; 
export default Apifetching;