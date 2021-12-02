import { findByAltText } from '@testing-library/react';
import React from 'react';
import { filData } from '../filData';

const FilteredEmp = () => {
    const finalData = filData;
    const output = finalData.data.filter((elem)=> elem.bloodgrounp!="" && elem.gender==="Male" && elem.age>25);
    return (
        <div>
            <h2>Filtered Data</h2>
            {output.map ((item)=>{
                return <div>
                
                <h4>Name {item.name}</h4>
                <h5>Age {item.age}</h5>
                <h5>Gender{item.gender} </h5>
                <h5>bloodground{item.bloodgrounp}</h5>
            
                </div>

            })}

        </div>
    );
};

export default FilteredEmp;