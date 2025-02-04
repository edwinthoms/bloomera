import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { ThemeProvider } from './context/ThemeContext';
import { CartItem } from './types';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-neutral-50 transition-colors dark:bg-neutral-900">
          <Header
            cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            onCartClick={() => setIsCartOpen(true)}
          />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
              <Route path="/product/:id" element={<Product onAddToCart={handleAddToCart} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
          />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;