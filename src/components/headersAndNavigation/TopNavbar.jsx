import { NavLink } from "react-router-dom";

export default function TopNavbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  );
}
