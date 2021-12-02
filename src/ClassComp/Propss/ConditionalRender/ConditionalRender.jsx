import React,{useState} from 'react';

import {Button} from "react-bootstrap";
const ConditionalRender=()=>{
const[show, setshow] =useState(false);
const ConditionalRender = () => {
    setshow(!show);
};
    return (
        <div>
            {show ? 
            <h1>"Dive True"</h1> 
            :<h1>"Div false"</h1> }      
            <Button onClick = {()=> setshow(!show)}>Toggile</Button>
            {/* //condition snow beacuse boolean value- show if ? a "true" : show is "false"
            //(! show) this  are optosite to show flase=== true and true- false  */}
        </div>
    );  
};
export default ConditionalRender;

//conditional Rendering  best on condition show on or not show IF/ Else use kre ke 
// how much condition 