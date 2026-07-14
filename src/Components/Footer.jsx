export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>ShopHub</h3>
          <p>Minimal essentials for a premium digital lifestyle.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li>Featured products</li>
            <li>New arrivals</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Shipping info</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4>Stay updated</h4>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Your email"
              className="newsletter-input"
            />
            <button type="button" className="btn btn-primary btn-small">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
