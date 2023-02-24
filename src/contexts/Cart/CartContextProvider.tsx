import { ReactNode, useReducer } from "react";
import { Product, CartProduct } from "../../@types/types";

import {
  addToCartAction,
  removeFromCartAction,
  updateProductQuantityAction,
} from "../../reducers/cart/actions";
import { cartReducer, INITIAL_STATE } from "../../reducers/cart/reducer";
import { CartContext } from "./useCart";

export type CartContextType = {
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  deliveryCost: number;
  numberOfItems: number;
  totalCost: number;
  itemsCost: number;
  selectedProducts: CartProduct[];
};

interface CartContextProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: CartProduct) => {
    dispatch(addToCartAction(product));
  };

  const removeFromCart = (id: number) => {
    dispatch(removeFromCartAction(id));
  };

  const updateCart = (id: number, quantity: number) => {
    dispatch(updateProductQuantityAction({ quantity, id }));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCart,
        deliveryCost: state.deliveryCost,
        numberOfItems: state.numberOfItems,
        totalCost: state.totalCost,
        itemsCost: state.itemsCost,
        selectedProducts: state.products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
