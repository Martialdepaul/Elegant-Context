import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className="bg-[#edbf68] p-4 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Cart />
      <form
        method="dialog"
        id="modal-actions"
        className="flex justify-between mt-4"
      >
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

CartModal.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
};

export default CartModal;
