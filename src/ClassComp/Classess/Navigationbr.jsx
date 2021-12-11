import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbr = () => {
    return (
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/calulater">Services</Link>
            <Link to="/Api">About us</Link>
            <Link to="/Apifetching">Contact</Link>
            <Link to="/">Counter</Link>

            
        </div>
    );
};

export default Navigationbr;