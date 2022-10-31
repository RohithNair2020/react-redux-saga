import {
  ADD_TO_CHECKOUT,
  REMOVE_FROM_CHECKOUT,
  EMPTY_CHECKOUT,
  GET_PRODUCTS
} from "./constant";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const addToCheckout = (productData) => {
  return {
    type: ADD_TO_CHECKOUT,
    data: productData,
  };
};

export const removeFromCheckout = (productData) => {
  return {
    type: REMOVE_FROM_CHECKOUT,
    data: productData,
  };
};

export const emptyCheckout = () => {
  return {
    type: EMPTY_CHECKOUT,
  };
};
