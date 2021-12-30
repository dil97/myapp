import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './A-Navigation/NavBar';
import ProductCart from './B-Products/ProductCart';
import ProductParent from './B-Products/ProductParent';
import ProductDetails from './B-Products/ProductDetails';

const Landing = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <BrowserRouter>
                 <NavBar setSearch= {setSearch}/>
                 <Routes>
                     <Route path ="/" element={<ProductParent search= {search}/>}   />
                     <Route path ="/cart" element={<ProductCart/>}   />
                     <Route path ="/details" element={<ProductDetails/>}   />
                 </Routes>
                 </BrowserRouter>
            
        </div>
    );
};

export default Landing;
// when at time of fillter persom i.e tieme seardch perperfom