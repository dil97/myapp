import React from 'react';
import { Link } from 'react-router-dom';

const NavBAr = () => {
    return (
        <div>
            <Link to="/">movies</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/details">moviedetails</Link>
            
        </div>
    );
};

export default NavBAr;