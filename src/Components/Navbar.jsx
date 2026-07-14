import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">S</span>
          <span>ShopHub</span>
        </Link>

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <Link
            to="/"
            className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/checkout"
            className={`navbar-link ${location.pathname === "/checkout" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
        </div>

        <div className="navbar-auth">
          <Link
            to="/checkout"
            className="navbar-icon-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="navbar-icon">🛒</span>
            <span className="navbar-badge">{itemCount}</span>
          </Link>

          {!user ? (
            <div className="navbar-auth-links">
              <Link
                to="/auth"
                className="btn btn-secondary btn-small"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth"
                className="btn btn-primary btn-small"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <div className="navbar-profile">
                <span className="navbar-profile-icon">
                  {user.email?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary btn-small" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
