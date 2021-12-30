import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import "./Redux.css"

const ProductDetails = () => {
    const dispatch = useDispatch();
   const selectedItem = useSelector((state)=> state.groupReducer.selectedproduct[0])   // call back funcation to use selector
    return (
        <div className="card-parent">
            <div className="card">
            <h1>ProductDetails</h1>
            <img className="photos" src={selectedItem.image}  alt="" />                    
            <h3>{selectedItem.title.substr(0,20)+"..."}</h3>
            <h4>price: ${selectedItem.price}</h4>
            <button onClick = {()=> dispatch({type: "Add-Cart" , data:selectedItem})}>ADD To Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;