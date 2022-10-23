import React from "react";
import { useDispatch } from "react-redux";
import { addToCheckout } from "../../redux/actions";
import productData from "../../data/products.json";

export default function ProductPage() {
  const dispatch = useDispatch();

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
    </div>
  );
}
