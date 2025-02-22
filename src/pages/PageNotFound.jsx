import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center h-screen">
      <img
        src="/images/page404.png"
        alt="page-404-image"
        className="m-8 border-2 rounded-full w-96"
      />
      <p className="m-8 text-4xl text-slate-100">
        <span>🚩</span> Page not found! 404 <span>🚩</span>
      </p>
      <div className="bg-slate-800 text-slate-200">
        {/* <NavLink to="">Go to Home</NavLink> */}
      </div>
      <div className="px-4 py-1 rounded-md bg-slate-600 text-slate-200 hover:bg-slate-200 hover:text-slate-600">
        <NavLink to="/">Go to Homepage</NavLink>
      </div>
    </div>
  );
}
