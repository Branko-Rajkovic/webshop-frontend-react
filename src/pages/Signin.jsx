import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavLink to=".." className="mb-4 text-sky-200 hover:underline">
        ← Back to Previous Page
      </NavLink>
      <div className="p-6 shadow-lg bg-slate-500 rounded-2xl w-96">
        <h2 className="mb-4 text-2xl font-bold text-center text-slate-200">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-100">Username</span>
            <input
              className="p-2 border-none rounded-md"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-100">Email</span>
            <input
              className="p-2 border-none rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-100">Password</span>
            <input
              className="p-2 border-none rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-100">
              Confirm Password
            </span>
            <input
              className="p-2 border-none rounded-md"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white rounded-lg bg-sky-300 hover:bg-sky-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
