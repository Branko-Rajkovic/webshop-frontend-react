import { useContext } from "react";
import { CardsContext } from "../store/cardsContext";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CardsContext);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
        </div>
        <p>{description}</p>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
