import { CartProduct } from "../../@types/types";
import { CartAction, CartActionTypes, CartState } from "./types";

export const INITIAL_STATE: CartState = {
  products: [],
  deliveryCost: 0,
  numberOfItems: 0,
  totalCost: 0,
};

const MAX_NUMBER_OF_ITEMS = 99;

const calculateDeliveryCost = (totalValue: number) => {
  return totalValue * 0.1;
};

const calculateTotalCost = (products: CartProduct[]) => {
  return products.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity * currentProduct.valueCents;
  }, 0);
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const product = action.payload.product;
      let newProducts;

      if (product.quantity === 0) return state;

      const productInCartIndex = state.products.findIndex(
        (stateProduct) => stateProduct.id === product.id
      );

      const isProductInsideTheCart = productInCartIndex !== -1;

      if (isProductInsideTheCart) {
        const clonedProductsArray = [...state.products];

        let newQuantity =
          state.products[productInCartIndex].quantity + product.quantity;

        if (newQuantity > MAX_NUMBER_OF_ITEMS) {
          newQuantity = MAX_NUMBER_OF_ITEMS;
        }

        clonedProductsArray.splice(productInCartIndex, 1, {
          ...state.products[productInCartIndex],
          quantity: newQuantity,
        });

        newProducts = clonedProductsArray;
      } else {
        newProducts = [...state.products, product];
      }

      const totalCost = calculateTotalCost(newProducts);
      const deliveryCost = calculateDeliveryCost(totalCost);
      const numberOfItems = newProducts.length;

      return {
        products: newProducts,
        totalCost,
        deliveryCost,
        numberOfItems,
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      const id = action.payload.id;
      const clonedProductsArray = [...state.products];

      const indexToBeRemoved = state.products.findIndex(
        (product) => product.id === id
      );

      clonedProductsArray.splice(indexToBeRemoved, 1);

      const totalCost = calculateTotalCost(clonedProductsArray);
      const deliveryCost = calculateDeliveryCost(totalCost);
      const numberOfItems = clonedProductsArray.length;

      return {
        products: clonedProductsArray,
        totalCost,
        deliveryCost,
        numberOfItems,
      };
    }
    case CartActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const { id, quantity } = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: quantity,
          };
        }

        return product;
      });

      const totalCost = calculateTotalCost(updatedProducts);
      const deliveryCost = calculateDeliveryCost(totalCost);
      const numberOfItems = updatedProducts.length;

      return {
        products: updatedProducts,
        totalCost,
        deliveryCost,
        numberOfItems,
      };
    }
    case CartActionTypes.CLEAN_UP_CART: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
