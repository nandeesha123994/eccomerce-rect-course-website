import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <article className="product-card">
      <div className="product-card-media">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <span className="product-badge">New</span>
        <button
          type="button"
          className="wishlist-btn"
          aria-label="Add to wishlist"
        >
          ♥
        </button>
      </div>
      <div className="product-card-content">
        <div className="product-card-topline">
          <span className="product-category">Featured</span>
          <div className="product-rating">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </div>
        </div>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">₹{product.price}</p>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-actions">
          <Link
            className="btn btn-secondary btn-small"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>
          <button
            className="btn btn-primary btn-small"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
