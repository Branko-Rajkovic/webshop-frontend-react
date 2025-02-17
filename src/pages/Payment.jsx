import { useContext } from "react";
import { CartContext } from "../store/cartContext";
import Header from "../components/headersAndNavigation/Header";

export default function Payment() {
  const { items } = useContext(CartContext);

  const total = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        {/* Cart Items */}
        <div className="p-4 border shadow-lg rounded-2xl bg-[#6b5d4b]">
          <h2 className="mb-4 text-xl font-bold text-slate-200">
            🛒 Your Cart
          </h2>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <img
                  src={item.image}
                  alt="product-in-card"
                  className="w-8 rounded-md"
                />
                <span className="text-amber-200">{item.name}</span>
                <span className="font-semibold text-amber-300">
                  ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-bold text-right text-amber-300">
            Total: ${total}
          </div>
        </div>

        {/* Payment Form */}
        <div className="p-4 border shadow-lg rounded-2xl h-fit bg-[#d1b19d]">
          <h2 className="mb-4 text-xl font-bold text-slate-100">
            Payment Details
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-slate-100"
              >
                Cardholder Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="card-number"
                className="block font-medium text-slate-100"
              >
                Card Number
              </label>
              <input
                id="card-number"
                type="text"
                placeholder="1234 5678 9012 3456"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiry"
                  className="block font-medium text-slate-100"
                >
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block font-medium text-slate-100"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-1 mx-4 text-xl italic font-semibold text-white transition bg-green-400 float-end rounded-xl hover:bg-green-300"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
