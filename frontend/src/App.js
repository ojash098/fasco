import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { API_ENDPOINTS } from './config';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log('Fetching products...');
      const response = await fetch(API_ENDPOINTS.PRODUCTS);
      console.log('Response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Products loaded:', data.length);
        setProducts(data);
      } else {
        console.error('Failed to fetch products:', response.status, response.statusText);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await fetch(API_ENDPOINTS.CART, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const response = await fetch(API_ENDPOINTS.CART_ITEM(productId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(API_ENDPOINTS.CART_ITEM(productId), {
        method: 'DELETE',
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(API_ENDPOINTS.CART, {
        method: 'DELETE',
      });
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar cartItemCount={getCartItemCount()} />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
            <Route 
              path="/product/:id" 
              element={<ProductDetail addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart}
                  updateCartItem={updateCartItem}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  getCartTotal={getCartTotal}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 