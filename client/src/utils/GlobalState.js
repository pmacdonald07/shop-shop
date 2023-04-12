import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// Note to self: createContext will be used to instantiate a new Context object.
// The more meaningful term we can use here is that we're using it to create the container
// to hold our global state data and functionality so we can provide it throughout our app

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
