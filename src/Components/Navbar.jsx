import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container"></div>
      <Link to="/" className="navbar-brand">
        shopHub
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/Checkout" className="navbar-link">
          Cart
        </Link>
      </div>
      <div className="navbar-auth">
        <div className="navbar-auth-links">
          <Link to="/Auth" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/Auth" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
