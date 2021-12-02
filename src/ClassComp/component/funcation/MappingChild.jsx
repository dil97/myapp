import React from 'react';
import { Card,Button } from 'react-bootstrap';
const MappingChild = (itemcurrent) => {
    return (
        <div style={{float:"left" , padding:"40px"}}>
        
            <Card style={{width:"200px" , height:"350px" ,border:"10px groove pink"}}>
                <img style={{width:"100%" , height:"80%"}} src={itemcurrent.img} alt="" />
                <h1>{itemcurrent.title}</h1>
                <p>{itemcurrent.desc}</p>
            </Card>
        </div>
    );
};

export default MappingChild;