import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { shoppingCartReducer } from "./shoppingCartReducer";

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  const handleAddItemToCart = (id) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
