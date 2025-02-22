import React from "react";
import Header from "../components/headersAndNavigation/Header";
import Footer from "../components/headersAndNavigation/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between min-h-screen text-slate-900">
      <Header />
      <div className="max-w-3xl p-6 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-sky-200">
          Contact Us
        </h1>

        <section className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            Have any questions or concerns? Fill out the form below or reach us
            at{" "}
            <a
              href="mailto:[Your Email]"
              className="text-blue-500 hover:underline"
            >
              [Your Email]
            </a>
            . We’d love to hear from you!
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800">
            Contact Form
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label className="block font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
