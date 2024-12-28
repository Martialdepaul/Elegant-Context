import PropTypes from "prop-types";

export default function Shop({ children }) {
  return (
    <section id="shop" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-merriweather mb-6 uppercase text-white/50 text-center">
        Elegant Clothing For Everyone
      </h2>
      <ul
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {children}
      </ul>
    </section>
  );
}

Shop.propTypes = {
  children: PropTypes.node.isRequired,
};
