import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCheckout, getProducts } from "../../redux/actions";
// import productData from "../../data/products.json";

export default function ProductPage() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productPageData);

  useEffect(() => {
    dispatch(getProducts());
  },[]);

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Number of Products : </h2>
      <ol>
        {productData.map((product) => {
          return (
            <li>
              <span>
                <bold>{product.name}</bold>
                <button
                  onClick={() => {
                    dispatch(addToCheckout(product));
                  }}
                >
                  Add To Checkout
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      {/* <button onClick={() => dispatch(getProducts())}>Fetch Products</button> */}
    </div>
  );
}
