import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCheckout, emptyCheckout } from "../../redux/actions";

export default function CheckoutPage() {
  const checkoutData = useSelector((state) => state.checkoutPageData);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Checkout Page</h1>
      <h2>
        Number of products in checkout : <span>{checkoutData.length}</span>
      </h2>
      {!!checkoutData.length && (
        <div>
          <ul>
            {checkoutData.map((product) => {
              return (
                <li>
                  <span>
                    <bold>{product.name}</bold>
                    <button onClick={() => dispatch(removeFromCheckout(product))}>
                      Remove from Checkout
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
          <button onClick={() => dispatch(emptyCheckout())}>Empty Checkout</button>
        </div>
      )}
    </div>
  );
}
