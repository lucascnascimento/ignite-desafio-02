import { ReactNode, useReducer } from "react";
import { Product, CartProduct } from "../../@types/types";

import { addToCartAction } from "../../reducers/cart/actions";
import { cartReducer, INITIAL_STATE } from "../../reducers/cart/reducer";
import { CartContext } from "./useCart";

export type CartContextType = {
  addToCart: (product: CartProduct) => void;
  removeFromCart: () => void;
  updateCart: () => void;
  deliveryCost: number;
  numberOfItems: number;
  totalCost: number;
};

interface CartContextProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: CartProduct) => {
    dispatch(addToCartAction(product));
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart: () => {},
        updateCart: () => {},
        deliveryCost: state.deliveryCost,
        numberOfItems: state.numberOfItems,
        totalCost: state.numberOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
