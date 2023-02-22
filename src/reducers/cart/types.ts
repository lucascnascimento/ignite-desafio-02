import { CartProduct } from "../../@types/types";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
  CLEAN_UP_CART = "CLEAN_UP_CART",
}

type AddToCartAction = {
  type: typeof CartActionTypes.ADD_TO_CART;
  payload: { product: CartProduct };
};

type RemoveFromCartAction = {
  type: typeof CartActionTypes.REMOVE_FROM_CART;
  payload: { id: number };
};

type UpdateCartAction = {
  type: typeof CartActionTypes.UPDATE_PRODUCT_QUANTITY;
  payload: {
    quantity: number;
    id: number;
  };
};

type CleanUpCart = {
  type: typeof CartActionTypes.CLEAN_UP_CART;
};

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartAction
  | CleanUpCart;

export type CartState = {
  products: CartProduct[];
  deliveryCost: number;
  numberOfItems: number;
  totalCost: number;
};
