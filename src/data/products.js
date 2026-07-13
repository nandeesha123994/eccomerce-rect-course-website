const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },

  {
    id: 9,
    name: "Gaming Chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&h=500&fit=crop",
    description:
      "Comfortable gaming chair with ergonomic design, adjustable armrests, and lumbar support.",
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with powerful bass, clear sound, and long battery life.",
  },
  {
    id: 11,
    name: "Smartphone",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description:
      "Latest smartphone with high-performance processor and advanced camera system.",
  },
  {
    id: 12,
    name: "Tablet",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description:
      "Lightweight tablet with high-resolution display and powerful performance.",
  },
  {
    id: 13,
    name: "Power Bank",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    description:
      "Fast charging power bank with high capacity and compact portable design.",
  },
  {
    id: 14,
    name: "Gaming Controller",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&h=500&fit=crop",
    description:
      "Wireless gaming controller with responsive buttons and comfortable grip.",
  },
  {
    id: 15,
    name: "External SSD",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description:
      "High-speed external SSD for quick file transfers, backups, and extra storage.",
  },
  {
    id: 16,
    name: "Smart LED Lamp",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Smart LED desk lamp with adjustable brightness and modern workspace design.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
