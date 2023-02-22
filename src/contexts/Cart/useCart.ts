import { createContext, useContext } from "react";
import { CartContextType } from "./CartContextProvider";

export const CartContext = createContext({} as CartContextType);

export const useCart = () => useContext(CartContext);
