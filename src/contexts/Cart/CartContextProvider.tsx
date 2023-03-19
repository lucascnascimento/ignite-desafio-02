import { ReactNode, useCallback, useEffect, useReducer } from "react";
import { CartProduct } from "../../@types/types";

import {
  addToCartAction,
  removeFromCartAction,
  updateProductQuantityAction,
  cleanUpCartAction,
} from "../../reducers/cart/actions";
import { cartReducer, INITIAL_STATE } from "../../reducers/cart/reducer";
import { CartState } from "../../reducers/cart/types";
import { getFromLocalStorage, setToLocalStorage } from "../../utils";
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

const CART_KEY = "@ignite-coffee-delivery:cart-state-1.0.0";

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE,
    (initialState: CartState) => {
      const localStorageState = getFromLocalStorage(CART_KEY);

      if (!localStorageState) return initialState;

      return localStorageState;
    }
  );

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

  useEffect(() => {
    setToLocalStorage<CartState>(state, CART_KEY);
  }, [state]);

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
