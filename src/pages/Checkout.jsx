import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();
  const shipping = total > 0 ? (total > 100 ? 0 : 12.99) : 0;
  const grandTotal = total + shipping;

  function placeOrder() {
    alert("Successful Order!");
    clearCart();
  }

  return (
    <div className="page">
      <div className="container">
        <div className="section-heading checkout-heading">
          <div>
            <span className="eyebrow">Your bag</span>
            <h1 className="page-title">Checkout</h1>
          </div>
        </div>

        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.length === 0 ? (
              <div className="empty-state">
                <h3>Your cart is empty.</h3>
                <p>
                  Add a favorite item and return here to complete your order.
                </p>
                <Link to="/" className="btn btn-primary btn-small">
                  Continue shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{item.product.name}</h3>
                    <p className="checkout-item-price">
                      ₹{item.product.price} each
                    </p>
                  </div>
                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="checkout-item-total">
                      ₹{(item.product.price * item.quantity).toFixed(0)}
                    </p>
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>
            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>
              <p className="checkout-total-value">₹{total.toFixed(0)}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Shipping:</p>
              <p className="checkout-total-value">₹{shipping.toFixed(0)}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Total:</p>
              <p className="checkout-total-value checkout-total-final">
                ₹{grandTotal.toFixed(0)}
              </p>
            </div>
            <button
              className="btn btn-primary btn-large btn-block"
              onClick={placeOrder}
            >
              Place Order
            </button>
            <Link
              to="/"
              className="btn btn-secondary btn-large btn-block secondary-link"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
