import React , {useState} from 'react';  ///why useState to mangae the state 

// previous state ko reserve nhi krta too apko usko reserve karke rkhana padta to use previous state ki one coppy use 
//current state ki coppy lekar updated state ke stath uupdate krna padta  when name update then to show (...details,name:e.traget.value)//

const Inputv2 = () => {
    const[details, setdetails] = useState({name:"" , age:"" , message:"" , Object:""});
   
    return (
        <div>
            <h1>This is State Changes Behaviou</h1>
            <input type="text" placeholder="Enter name" name="Name"
            onChange={(e)=>setdetails({...details,name:e.target.value})}/>

            <br />
            <input type="text" placeholder="Enter age"
            onChange={(e)=>setdetails({...details,age: e.target.value})}/>
            <br />
            <input type="text" placeholder="Enter message"
            onChange={(d)=>setdetails({...details,message:d.target.value})}/>
            <br />
            <input type="text" placeholder="Enter object"
            
            onChange={(e)=>setdetails({...details,Object:e.target.value})}/>

            <br />
             <h2>name: {details.name}</h2>
             <h2>age: {details.age}</h2>
             <h2>Message:{details.message}</h2>
             <h2>object:{JSON.stringify(details)}</h2>
        </div>
    );
};

export default Inputv2;