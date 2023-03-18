import { ReactNode, useCallback, useReducer } from "react";
import { Product, CartProduct } from "../../@types/types";

import {
  addToCartAction,
  removeFromCartAction,
  updateProductQuantityAction,
  cleanUpCartAction,
} from "../../reducers/cart/actions";
import { cartReducer, INITIAL_STATE } from "../../reducers/cart/reducer";
import { CartContext } from "./useCart";

export type CartContextType = {
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  cleanUpCart: () => void;
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

  const addToCart = useCallback((product: CartProduct) => {
    dispatch(addToCartAction(product));
  }, []);

  const removeFromCart = useCallback((id: number) => {
    dispatch(removeFromCartAction(id));
  }, []);

  const updateCart = useCallback((id: number, quantity: number) => {
    dispatch(updateProductQuantityAction({ quantity, id }));
  }, []);

  const cleanUpCart = useCallback(() => {
    dispatch(cleanUpCartAction());
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCart,
        cleanUpCart,
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
