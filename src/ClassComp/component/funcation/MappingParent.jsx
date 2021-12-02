import React from 'react';
import MappingChild from './MappingChild';
import {data} from "../funcation/Cardre";

const MappingParent = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>This is Mapping parent</h1>
            {data.userData.map((itemcurrent) =>{
                return<MappingChild itemcurrent = {itemcurrent}
                img={itemcurrent.img}
                title={itemcurrent.title}
                desc={itemcurrent.desc}          
                />;
                
            })}; </div>
    );
};

export default MappingParent;