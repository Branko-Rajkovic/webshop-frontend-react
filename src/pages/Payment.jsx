import Header from "../components/headersAndNavigation/Header";
import CartPayment from "../components/cart/CartPayment";
import CreditCard from "../components/forms/CreditCard";
import { motion } from "framer-motion";

export default function Payment() {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header />
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* Cart Items */}
          <CartPayment />

          {/* Payment Form */}
          <CreditCard />
        </div>
      </div>
    </motion.div>
  );
}
