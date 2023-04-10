import { useReducer } from 'react';

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, actions) => {
  switch (actions.type) {
    // if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...actions.products],
      };

    // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...actions.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: actions.currentCategory,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
