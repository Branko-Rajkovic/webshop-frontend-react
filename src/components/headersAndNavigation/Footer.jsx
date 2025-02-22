import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="copyright">
          © 2025{" "}
          <NavLink href="/" className="link-small">
            B™
          </NavLink>
          . All Rights Reserved.
        </span>
        <ul>
          <li>
            <NavLink href="/about" className="link-small">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="link-small">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="link-small">
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact" className="link-small">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
