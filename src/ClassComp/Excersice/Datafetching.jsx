import React,{useState , useEffect} from 'react';
import axios from 'axios';

const Datafetching = ()=>{
        const[albums , setAlbums]= useState([]);
    useEffect(()=>{
        axios.get ("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{console.log(res.data)
          setAlbums(res.data)})


        .catch((Error)=>console.log("u Know==>",Error))
    },[]);
    


    return(
        <div>
            <h1>This is API Datafetching </h1>
            { albums.map((dil)=>{
                            return(
                                <div>
                                    <h1>title{dil.userId}</h1>
                                    <h2>title{dil.id}</h2>
                                    <h3>title{dil.title}</h3>
                                </div>
                            )}
             )}

        </div>
    )   


};
export default Datafetching

