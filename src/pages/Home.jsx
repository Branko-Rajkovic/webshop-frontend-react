import React from "react";
import Header from "../components/headersAndNavigation/Header";
import useFetchData from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data, error } = useFetchData(
    "https://fakestoreapi.com/products/categories"
  );
  return (
    <div>
      <Header />
      <div className="flex">
        <ul
          className={`m-4 w-1/3 text-amber-300 text-4xl font-semibold font-["Tangerine",_serif]`}
        >
          <li key="-1" className="hover:text-amber-100 ">
            <NavLink to="/all-products">All Products</NavLink>
          </li>
          {data.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
        <div>
          <img src="/images/home.png" alt="homepage-image" />
        </div>
      </div>
    </div>
  );
}
