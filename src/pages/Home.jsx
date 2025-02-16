import Header from "../components/Header.jsx";
import Shop from "../components/Shop.jsx";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "../components/Product.jsx";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </motion.div>
  );
}
