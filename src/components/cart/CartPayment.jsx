import { useContext } from "react";
import { CartContext } from "../../store/cartContext";

export default function CartPayment() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 border shadow-lg rounded-2xl bg-[#6b5d4b]">
      <h2 className="mb-4 text-xl font-bold text-slate-200">🛒 Your Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 border-b"
          >
            <img
              src={item.image}
              alt="product-in-card"
              className="w-1/12 rounded-md mx- 2"
            />

            <span className="w-1/2 text-amber-200">{item.name}</span>
            <span className="font-semibold text-amber-300 w-1-6">
              ${item.price.toFixed(2)}
            </span>
            <div className="flex items-center w-1/6 h-2 float-end">
              <p className="font-semibold text-amber-200">{item.quantity}</p>
              <button
                onClick={() => updateItemQuantity(item.id, 1)}
                className="w-1/3 px-1 m-1 text-green-200 border border-green-200 rounded-sm"
              >
                +
              </button>

              <button
                onClick={() => updateItemQuantity(item.id, -1)}
                className="w-1/3 px-1 m-1 text-red-100 border border-red-100 rounded-sm"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-lg font-bold text-right text-amber-300">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
