import { useContext } from "react";
import { CardsContext } from "../store/cardsContext";
import "../style/check.css";
import { motion } from "framer-motion";

export default function Checkout() {
  const { items } = useContext(CardsContext);
  console.log("checkout", items);
  return (
    <motion.div
      className="checkout"
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="product-container">
        {items.map((item) => {
          return (
            <div key={item.id} className="single-product">
              <div className="image">
                <img src={item.image} alt="product-in-card" border="0" />
              </div>
              <div className="details">
                <h1 className="cost">
                  {item.quantity} x ${item.price}
                </h1>
                <h3 className="title">{item.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-container">
        <div className="mastercard">
          <div className="name">mastercard</div>
        </div>
        <div className="card-details">
          <div className="field">
            <label htmlFor="cn">Card Number:</label>
            <input id="cn" type="text" placeholder="Card Number" />
          </div>
          <div className="field">
            <label htmlFor="cna">Name on Card:</label>
            <input id="cna" type="text" placeholder="Name on Card" />
          </div>
          <div className="field">
            <label htmlFor="exp">Expires:</label>
            <input id="exp" type="text" placeholder="Expires" />
          </div>
          <div className="field">
            <label htmlFor="cvc">cvc:</label>
            <input id="cvc" type="text" placeholder="cvc" />
          </div>
        </div>
        <button className="purchase-button">Final Checkout</button>
      </div>
    </motion.div>
  );
}
