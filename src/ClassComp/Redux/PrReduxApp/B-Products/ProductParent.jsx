import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductChild from "./ProductChild";
import "../Redux.css";
const ProductParent = ({ search }) => {
  const dispatch = useDispatch();
  const [product, setProducts] = useState([]); // object array se replace hoga why usestate? to be Serach
  const getApiProduct = async () => {
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    setProducts(allProducts.data);
    dispatch({ type: "Add-Product", data:allProducts.data });
  }; /// type and deta both need  nw multiple deta to use object  
  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <div>
      <h1>ProductParent</h1>
      {product.map((item) => {
        return <ProductChild item={item} />;
      })}
    </div>
  );
};

export default ProductParent;

// single sourcse of truth is a store the component acnd recived object the sotroe state of all component isn asingle place i.e called store
//what as redux component- reducer is how to the state change just now state management  
// redus deta flow they are passing deta to reducer and reducer the deata to provide completment a
// action is a type of property there is a  fucaton is what is returing what is action is using for action to creat a functin is to be 
// reducer its to reducer privious state and make a return state thera are no change and abovius scnage of the state
// what is store is a single source of truth access the state ad dispatvh and selectro to be work as push and pusll deata apl 
//flux == store content state and change multilple 
// redus ==store and change logic are sperate we can multiple / caonstainer complen state is imutable huge community to use redux is makes react page very femous 
// redus thunk is a actoin of make a middlewre onse a sync operation action creater and reducer in redux flow