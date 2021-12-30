import React,{useState} from 'react';
import NavBAr from './Redux/ReduxApp/A-Navigation/NavBAr';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductParent from './Redux/ReduxApp/B-Products/ProductParent';
import ProdcutCart from './Redux/ReduxApp/B-Products/ProdcutCart';

import ProdctDetails from './Redux/ReduxApp/B-Products/ProdctDetails';
import { useStore } from 'react-redux';

const Landing = () => {
    const [search , setSerarch] = useState("");
    return (
        <div>
            <BrowserRouter>
            <NavBAr setSerarch={setSerarch}/>
            <Routes>
                <Route path="/" element={<ProductParent search={search}/>}/>
                <Route path="/cart" element={<ProdcutCart/>}/>
                <Route path="/details" element={<ProdctDetails/>}/>
            </Routes>

            </BrowserRouter>
            
        </div>
    );
};

export default Landing;