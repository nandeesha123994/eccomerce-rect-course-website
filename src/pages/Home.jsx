import ProductCard from "../Components/ProductCard";
import { getProducts } from "../data/products";
function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">WELCOME TO SHOPHUB </h1>
        <p className="home-subtitle">
          Discover amzing products at graet proces
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
