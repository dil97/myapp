import React ,{us}from "react";
import {Prodcuts}  from "../Counter/Prodcuts";

export const Cars = () =>{
    const[prod , setProd] = useState (Prodcuts.data)
    const [text , setText] = useState("")
    const handleFiltered =() => {
        const filtProd = Prodcuts.data.filter(
            (elem) => elem.Name.toLowerCase().includes(text.toLowerCase().trim()));
                                                         //    / = this item are variable

/// includes it a Au type then show AUDI , upper case in use type auDi then to automatical convert into uppercase.

        text !== "" ? setProd(filtProd)  : setProd(Prodcuts.data);

    };
    

    return (
     <div key="index">
        <div style={{margin:"20px"}}>
        <input onChange={(e) => setText(e.target.value)} type="Search" name="" id=""/> 
        <button onClick={handleFiltered}>Search</button>
        {/* // also use {()=>handleFiltered()} */}
    </div>
    
        <div style={{
            margin:"10px",
            display:"flex",
            alignContent:"center",
            justifyContent:"center",
            flexWrap:"wrap",
        }}>
         </div>
            {prod.map((item) =>(
                    <div >
                        <img width="300px" src={item.url} alt="" />
                        <h3>{item.Name}</h3>
                        <h4>Price : <b>{item.price}</b></h4>
                        <p>type : {item.type}</p>
                    </div>
                )
            )}


        </div>
    );
};