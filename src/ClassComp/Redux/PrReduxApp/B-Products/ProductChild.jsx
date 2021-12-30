import React from 'react';

const ProductChild = ({item}) => {
    return (
        <div className='card'>
           
            <img width="250px" height="250px" src={item.image}  alt="" />
            <h4>ad{item.title}</h4>
            <h5>Price:${item.price}</h5>
            <button>Add To Cart</button>
            <button>View Details</button>
            
        </div>
    );
};

export default ProductChild;