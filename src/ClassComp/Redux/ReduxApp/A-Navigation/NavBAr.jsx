import React,{target} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const NavBAr = (setSerarch) => {
    return (
        <div>
            <div className='nav'>
           <Link to="/">classReduxApp</Link>
            <input onChange={()=>setSerarch((e)=> target.value)}  type="text" name="" id="" />
            <button>Search</button>
           <Link to="/cart">Cart</Link>
           </div>
            
        </div>
    );
};

export default NavBAr;