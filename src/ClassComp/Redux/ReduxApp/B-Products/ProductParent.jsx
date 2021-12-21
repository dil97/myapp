import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductChild from "./ProductChild";
import "../../ReduxApp/Redux.css";
const ProductParent = ({ search }) => {
  const dispatch = useDispatch();
  const [product, setProducts] = useState([]); // object array se replace hoga why usestate? to be Serach
  const getApiProduct = async () => {
    const allProducts = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setProducts(allProducts.data);
    dispatch({ type: "Add-Product", data: allProducts.data });
  };
  useEffect(() => {
    getApiProduct();
  }, []);
  useEffect(() => {
    const fillterd = product.data.filter((item) =>
      item.title.toLowerCare().include(search.toLowerCare())
    );

    search == "" ? setProducts(product) : setProducts(fillterd);
  }, [search]);
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
