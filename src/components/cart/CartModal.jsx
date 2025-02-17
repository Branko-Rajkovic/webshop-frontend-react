import { useImperativeHandle, useRef } from "react";
import Cart from "./Cart";

const CartModal = function CartModal({ ref, title, actions }) {
  const cart = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        cart.current.showModal();
      },
      closeDialog: () => {
        cart.current.close();
      },
    };
  });

  return (
    <dialog className="modal" ref={cart}>
      <h2>{title} 🛒</h2>
      <Cart />
      <form method="dialog">{actions}</form>
    </dialog>
  );
};

export default CartModal;
