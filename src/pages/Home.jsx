import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";

export default function Home() {
  const products = getProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const categories = ["Audio", "Wearables", "Desk Setup", "Accessories"];

  return (
    <div className="page">
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">Premium essentials</span>
            <h1 className="home-title">
              Elevated tech for a smarter everyday.
            </h1>
            <p className="home-subtitle">
              Discover carefully curated gadgets designed for work, comfort, and
              style.
            </p>
            <div className="hero-actions">
              <Link to="/checkout" className="btn btn-primary">
                Start Shopping
              </Link>
              <a href="#products" className="btn btn-secondary">
                Explore Products
              </a>
            </div>
            <div className="hero-highlights">
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
              <div>
                <strong>Free</strong>
                <span>Express shipping</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Support available</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-overlay">
              <span className="eyebrow">Limited offer</span>
              <h3>Fresh arrivals this week</h3>
              <p>
                Save on standout accessories that bring comfort and performance
                together.
              </p>
              <Link to="/checkout" className="btn btn-primary btn-small">
                Shop Deals
              </Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>Fast delivery</h3>
            <p>Tracked shipping with premium packaging.</p>
          </div>
          <div className="feature-card">
            <h3>Secure checkout</h3>
            <p>Protected payments and easy returns.</p>
          </div>
          <div className="feature-card">
            <h3>Premium support</h3>
            <p>Friendly experts to help with every step.</p>
          </div>
        </section>

        <section className="categories-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Popular categories</span>
              <h2>Shop by lifestyle</h2>
            </div>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <div className="category-card" key={category}>
                <h3>{category}</h3>
                <p>
                  Discover the latest picks tailored for{" "}
                  {category.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div>
            <span className="eyebrow">Exclusive collection</span>
            <h3>Upgrade your workspace with refined essentials.</h3>
          </div>
          <Link to="/checkout" className="btn btn-primary">
            Browse collection
          </Link>
        </section>

        <section id="products" className="products-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Curated picks</span>
              <h2>Featured products</h2>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <div className="empty-state">
                <h3>No products found.</h3>
                <p>Try a different keyword to explore more favorites.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
