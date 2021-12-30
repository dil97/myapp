import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Redux.css"

const ProductChild = ({item}) => {
    const dispatch = useDispatch()
    return (
      
        <div className='card'>
           
            <img className='image' src={item.image} alt="" />
            <h3>{item.title.substr(0,20)+"..."}</h3>
            <h4>price: ${item.price}</h4>
            <button onClick = {()=> dispatch({type: "Add-Cart" , data: item})}>ADD To Cart</button>
            <Link to= "/details">
            <button onClick={()=>dispatch ({type: "Selected-Product" , data:item})}>View Detils</button>    
            </Link>
            </div>
         
    );
};

export default ProductChild;