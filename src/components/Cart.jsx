import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <>
      <div
        id="cart"
        className="p-6 bg-gray rounded-lg shadow-lg max-w-md mx-auto mt-8 border border-gray-200"
      >
        {items.length === 0 ? (
          <p className="text-center  text-lg">No items in cart!</p>
        ) : (
          <>
            <ul id="cart-items" className="space-y-6">
              {items.map((item) => {
                const formattedPrice = `$${item.price.toFixed(2)}`;

                return (
                  <li
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b border-gray-300"
                  >
                    <div className="text-sm font-medium text-custom-brown-1">
                      <span>{item.name}</span>
                      <span className="text-gray-500 ml-2">
                        ({formattedPrice})
                      </span>
                    </div>
                    <div className="cart-item-actions flex items-center space-x-3">
                      <button
                        onClick={() => updateItemQuantity(item.id, -1)}
                        className="px-3 py-1 bg-red-200 text-red-600 rounded-full hover:bg-red-300 transition duration-300 text-red"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateItemQuantity(item.id, 1)}
                        className="px-3 py-1 bg-green-200 text-green-600 rounded-full hover:bg-green-300 transition duration-300 text-green"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p
              id="cart-total-price"
              className="text-right mt-6 text-lg font-semibold text-custom-brown-2"
            >
              Cart Total:{" "}
              <strong className="text-indigo-600">{formattedTotalPrice}</strong>
            </p>
          </>
        )}
      </div>
    </>
  );
}
