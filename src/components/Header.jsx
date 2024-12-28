import { useRef, useContext } from "react";
import Logo from "../assets/logo.png";
import CartModal from "./CartModal";
import { CartContext } from "./CartContext";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button className="btn btn-primary">Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="btn btn-primary font-merriweather">Close</button>
        <button className="btn btn-primary bg-custom-brown-1 rounded-lg text-white px-2 py-2">
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="bg-custom-brown-1 text-white p-4">
        <div className="flex items-center justify-between">
          <div id="main-title" className="flex items-center ml-8 text-nowrap ">
            <img src={Logo} alt="Elegant model" className="h-12 w-auto mr-3" />
            <h1 className="md:text-4xl font-merriweather  py-7 uppercase text-[#edbf68] sm:text-3xl ">
              Elegant Context
            </h1>
          </div>
          <p>
            <button
              onClick={handleOpenCartClick}
              className="bg-[#edbf68] text-[#201e1a] font-Quicksand rounded px-3 py-1 text-lg hover:bg-[#f5b744] mr-20 text-nowrap"
              aria-label={`Cart: ${cartQuantity} items`}
            >
              Cart ({cartQuantity})
            </button>
          </p>
        </div>
      </header>
    </>
  );
}
