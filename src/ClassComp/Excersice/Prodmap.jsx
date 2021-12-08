import React from 'react';
import { products } from '../component/Counter/products';
import { Productitem } from './Productitem';

const Prodmap = () => {
    return (
        <div>
            {products.map((data)=>(<Productitem
                                        Name={data.Name}
                                        price={data.price}
                                        type={data.type}
                                        url={data.url}/>))}

{/* 
            {products.map((item) => (
        <ProductItem
          title={item.title}
          price={item.price}
          cat={item.cat}
          desc={item.desc}
          url={item.url}
        />
      ))} */}

        </div>
    );
};

export default Prodmap;