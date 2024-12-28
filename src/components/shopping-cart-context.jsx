import { createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};
