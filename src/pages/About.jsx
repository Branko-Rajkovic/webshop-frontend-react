import React from "react";
import TopNavbar from "../components/headersAndNavigation/TopNavbar";
import Footer from "../components/headersAndNavigation/Footer";

export default function About() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <TopNavbar />
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-slate-200">
          About Us
        </h1>

        <section className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in <strong>[Year]</strong>,{" "}
            <strong>[Your Webshop Name]</strong> started with a simple idea: to
            make <strong>[your niche]</strong> shopping easier, more affordable,
            and enjoyable. What began as a small project has grown into a
            trusted online store, serving customers worldwide.
          </p>
        </section>

        <section className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Why Shop With Us?
          </h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              <strong>Quality You Can Trust</strong> – Carefully selected,
              high-quality products.
            </li>
            <li>
              <strong>Great Prices</strong> – Direct deals with manufacturers
              and suppliers.
            </li>
            <li>
              <strong>Fast & Secure Shipping</strong> – Reliable delivery with
              tracking.
            </li>
            <li>
              <strong>Customer-Centric Service</strong> – Always here to help
              you.
            </li>
          </ul>
        </section>

        <section className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At <strong>[Your Webshop Name]</strong>, we believe shopping should
            be hassle-free and enjoyable. Our mission is to provide a seamless
            online experience, offering trendy, high-quality, and affordable
            products backed by excellent customer service.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
