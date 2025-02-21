import Header from "../components/headersAndNavigation/Header";
import CartPayment from "../components/cart/CartPayment";
import CreditCard from "../components/forms/CreditCard";

export default function Payment() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        {/* Cart Items */}
        <CartPayment />

        {/* Payment Form */}
        <CreditCard />
      </div>
    </div>
  );
}
