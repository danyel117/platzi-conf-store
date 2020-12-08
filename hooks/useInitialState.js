import { useState } from 'react';
import InitialState from 'initialState';

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload)=>{
    setState({
      ...state,
      buyer:[...state.buyer,payload]
    })
  }
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  };
};

export default useInitialState;
