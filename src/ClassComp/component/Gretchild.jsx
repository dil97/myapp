import React from "react";

export const Gretchild = ({mob}) =>{
    return (
        <div>
            <h1> this is Greatchild {mob}</h1>
            <p>props recived from grand parent .. parent.</p>
        </div>
    );
};
export default Gretchild;