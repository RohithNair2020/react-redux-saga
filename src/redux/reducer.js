// reducer handles the data in the store.
// reducer must return some value.
// the store can only accept a single reducer. So in case of multiple reducers, we must combine them into a rootReducer.
// the reducer must be provided with some initial value.

import {
  ADD_TO_CHECKOUT,
  REMOVE_FROM_CHECKOUT,
  EMPTY_CHECKOUT,
  GET_PRODUCTS,
  SET_PRODUCTS,
} from "./constant";

export const productPageData = (data = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return data;

    case SET_PRODUCTS:
      return action.data;

    default:
      return data;
  }
};

export const checkoutPageData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CHECKOUT:
      return [...data, action.data];

    case REMOVE_FROM_CHECKOUT:
      return data.filter((product) => product.name !== action.data.name);

    case EMPTY_CHECKOUT:
      return [];

    default:
      return data;
  }
};
