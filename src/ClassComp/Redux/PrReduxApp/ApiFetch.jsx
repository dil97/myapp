import axios from "axios";
import React,{useState , useEffect} from "react";

const ApiFetch =()=>{
    const [albums , setAlbums] = useState()

    const callMe= async ()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        setAlbums(result.data)
    };

    useEffect(()=>{
        callMe();

    },[])


    return(
        <div>This IS APT Prodcuts
        {
            albums.map((elem)=>{
                return(
                    <div>
                    <h3>{elem.title}</h3>
                    <h3>{elem.id}</h3>
                    <h3>{elem.userId}</h3>
                    <h3>{elem.images}</h3>
                    
                    
                    </div>
                )
            })
        }
        </div>
    )
}