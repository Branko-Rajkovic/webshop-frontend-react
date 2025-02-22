import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import useFetchData from "../hooks/useFetchData";
import { motion } from "framer-motion";
import Header from "../components/headersAndNavigation/Header";
import Shop from "../components/Shop";

export default function Category() {
  const params = useParams();

  const { data, error } = useFetchData(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
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
