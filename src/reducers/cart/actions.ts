import { CartProduct } from "../../@types/types";
import {
  CartActionTypes,
  AddToCartAction,
  RemoveFromCartAction,
  UpdateCartAction,
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
