import { useContext, useRef } from "react";

import CartModal from "../cart/CartModal.jsx";
import { CartContext } from "../../store/cartContext.jsx";
import { NavLink } from "react-router-dom";
import TopNavbar from "./TopNavbar.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <NavLink to="/payment">Checkout</NavLink>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header>
        <TopNavbar />
        <div className="main-header">
          <div className="main-title">
            <img src="/logo.gif" alt="logo" />
            <h1>Demo-Page.com</h1>
          </div>
          <p>
            <button onClick={handleOpenCartClick}>
              🛒Cart ({cartQuantity})
            </button>
          </p>
        </div>
      </header>
    </>
  );
}
