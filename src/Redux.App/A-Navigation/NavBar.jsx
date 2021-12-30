import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = ({setSearch}) => {
    const cartItem =useSelector ((state)=> state.groupReducer.cart)
    return (
        <div>
            <h2>Redux App!</h2>
            <Link to="/">ReduxApp</Link>
            <input onChange={(e)=> setSearch(e.target.value)} type="search"  />    
               {/* // this is synthatic event to use(e) */}
            <button>search</button>
            <Link to="/cart">Cart:{cartItem.length}</Link>
            
        </div>
    );
};

export default NavBar;