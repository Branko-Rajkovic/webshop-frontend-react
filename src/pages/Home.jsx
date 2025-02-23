import React from "react";
import Header from "../components/headersAndNavigation/Header";
import useFetchData from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";
import Footer from "../components/headersAndNavigation/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const { data, error } = useFetchData(
    "https://fakestoreapi.com/products/categories"
  );
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="flex  justify-center  bg-[url('/images/home.png')] bg-cover">
          <ul
            className={`m-12 text-amber-200 text-6xl font-semibold font-["Tangerine",_serif]`}
          >
            <li
              key="-1"
              className="p-2 mx-1 rounded-md text-sky-200 hover:text-sky-600 hover:bg-amber-200"
            >
              <NavLink to="/all-products">All Products</NavLink>
            </li>
            {data.map((category, index) => {
              return (
                <li
                  key={index}
                  className="p-2 mx-8 my-2 rounded-md hover:text-amber-800 hover:bg-amber-100"
                >
                  <NavLink to={`/category/${category}`}>{category}</NavLink>
                </li>
              );
            })}
          </ul>
          <div>{/* <img src="/images/home.png" alt="homepage-image" /> */}</div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}
