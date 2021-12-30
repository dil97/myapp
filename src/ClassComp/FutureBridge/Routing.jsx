import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Movies from './Movies';
import Moviescart from './Moviescart';
import MoviesDetails from './MoviesDetails';

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Movies/>}  />           
        <Route path="/" element={<Moviescart/>}  />           
        <Route path="/" element={<MoviesDetails/>}  />           
        </Routes>
        </BrowserRouter>
    );
};

export default Routing;