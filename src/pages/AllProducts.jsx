import Header from "../components/headersAndNavigation/Header.jsx";
import Shop from "../components/Shop.jsx";
import Product from "../components/Product.jsx";
import { motion } from "framer-motion";
import useFetchData from "../hooks/useFetchData.js";

export default function Home() {
  const { data, error } = useFetchData("https://fakestoreapi.com/products/");
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Shop>
        {data.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </motion.div>
  );
}
