import Header from "./components/Header";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./components/CartContextProvider";
import "./index.css";

function App() {
  return (
    <CartContextProvider>
      <>
        <Header />
        <main className="px-4 bg-custom-brown-1">
          <Shop>
            {DUMMY_PRODUCTS.map((product) => (
              <li
                key={product.id}
                className="bg-custom-brown-2 p-4 shadow rounded-md hover:shadow-lg transition-shadow"
              >
                <Product {...product} />
              </li>
            ))}
          </Shop>
        </main>
      </>
      ;
    </CartContextProvider>
  );
}

export default App;
