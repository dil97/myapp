import React,{useState , useEffect} from "react";
import axios from "axios";

const MoviesApi =()=>{
    const[movies, setMovies]=useState([])

   
    const callMe = async ()=> {
        const result = await axios.get("")
          setMovies(result.data);
        };
        useEffect(()=>{
          callMe();
        }
      ,[])

    return(
        <div>
            <h1>Movies Show</h1>

            {
                movies.map((dil)=>{
                    return(
                        <div>
                            <h3>{dil.title}</h3>
                            <h3>{dil.realsedDate}</h3>
                            <h3>{dil.rating}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}; 
export default MoviesApi;