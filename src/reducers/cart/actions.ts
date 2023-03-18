import { CartProduct } from "../../@types/types";
import {
  CartActionTypes,
  AddToCartAction,
  RemoveFromCartAction,
  UpdateCartAction,
  CleanUpCart,
} from "./types";

export const addToCartAction = (product: CartProduct): AddToCartAction => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCartAction = (id: number): RemoveFromCartAction => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

type UpdateProductQuantityArgs = {
  quantity: number;
  id: number;
};

export const updateProductQuantityAction = ({
  quantity,
  id,
}: UpdateProductQuantityArgs): UpdateCartAction => {
  return {
    type: CartActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};

export const cleanUpCartAction = (): CleanUpCart => {
  return { type: CartActionTypes.CLEAN_UP_CART };
};
