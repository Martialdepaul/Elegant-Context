import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product bg-custom-brown-2/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-t-lg">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="product-content mt-4">
        <div>
          <h3 className="text-xl font-merriweather text-[#edbf68]">{title}</h3>
          <p className="text-yellow-500 text-lg text-[#edbf68]/90 p-1 font-merriweather">
            ${price}
          </p>
          <p className="text-gray-600 text-white font-quicksand p-2 text-wrap">
            {description}
          </p>
        </div>
        <p className="product-actions mt-4">
          <button
            onClick={() => addItemToCart(id)}
            className="text-black py-2 px-4 rounded font-Quicksand hover:hover:bg-[#ad7a1a] transition bg-[#e8a426]"
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
