import React from 'react';
import { empData } from '../Propss/empData';

const Mappingpra = () => {
    return (
        <div>
            <h2 style={{textAlign:"center"}}>This is Parent Component</h2>
            <div style={{display:"flex" , flexWrap:"wrap", margin:"10px"}}> 
            {
                empData.map((data) =>{
                    return(
                    <div>
                        <img src="" alt="" />
                        <h2>name{data.name}</h2>
                        <h2>age {data.age} </h2>
                        <h2>contact {data.contact} </h2>
                        <h2>addrdes {data.add} </h2>
                        <h3>company name {data.Company} </h3>
                        
                    </div>
                    )
                })
            }

            </div>
            
        </div>
    );
};

export default Mappingpra;