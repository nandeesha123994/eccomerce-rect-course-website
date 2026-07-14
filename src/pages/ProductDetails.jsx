import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
    setSelectedImage(foundProduct.image);
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <div className="skeleton-card">
            <div className="skeleton-image" />
            <div className="skeleton-content">
              <div className="skeleton-line wide" />
              <div className="skeleton-line" />
              <div className="skeleton-line" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  function handleAddToCart() {
    for (let index = 0; index < quantity; index += 1) {
      addToCart(product.id);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-gallery">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="product-detail-main-image"
            />
            <div className="thumbnail-row">
              {[product.image, product.image, product.image].map(
                (image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`thumbnail-btn ${selectedImage === image ? "active" : ""}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="product-detail-content">
            <span className="eyebrow">Premium pick</span>
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-meta-row">
              <p className="product-detail-price">₹{product.price}</p>
              <div className="product-rating large">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
            </div>
            <p className="product-detail-description">{product.description}</p>

            <div className="quantity-selector">
              <span>Quantity</span>
              <div className="quantity-controls">
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                >
                  −
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => setQuantity((value) => value + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-detail-actions">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart {productQuantityLabel}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/checkout")}
              >
                Buy Now
              </button>
            </div>

            <div className="detail-panel">
              <h3>Why you’ll love it</h3>
              <ul>
                <li>Crafted for everyday comfort and premium performance.</li>
                <li>Modern design that fits seamlessly into your space.</li>
                <li>Built with reliable quality and thoughtful details.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
