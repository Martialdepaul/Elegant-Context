import { DUMMY_PRODUCTS } from "../dummy-products"; // Si tu utilises des produits factices comme dans ton code

export function shoppingCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      if (existingCartItemIndex >= 0) {
        const updatedItem = {
          ...updatedItems[existingCartItemIndex],
          quantity: updatedItems[existingCartItemIndex].quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload
        );
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    }

    case "UPDATE_ITEM": {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      if (updatedItemIndex >= 0) {
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
          quantity:
            updatedItems[updatedItemIndex].quantity + action.payload.amount,
        };

        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
      }

      return { items: updatedItems };
    }

    default:
      return state;
  }
}
