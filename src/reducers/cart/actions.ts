import { CartProduct, Product } from "../../@types/types";
import { CartAction, CartActionTypes } from "./types";

export const addToCartAction = (product: CartProduct): CartAction => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCartAction = (id: number) => {
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
}: UpdateProductQuantityArgs) => {
  return {
    type: CartActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      quantity,
      id,
    },
  };
};
