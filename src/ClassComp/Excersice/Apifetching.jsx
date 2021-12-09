import React,{useState , useEffect} from "react";
import axios from "axios";

const Apifetching =()=>{
    const[albums, setAlbums]=useState([])

   
    const callMe = async ()=> {
        const result = await axios.get("https://fakestoreapi.com/products")
          setAlbums(result.data);
        };
        useEffect(()=>{
          callMe();
        }
      ,[])

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