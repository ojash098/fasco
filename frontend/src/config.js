// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/api/products`,
  PRODUCT: (id) => `${API_BASE_URL}/api/products/${id}`,
  TESTIMONIALS: `${API_BASE_URL}/api/testimonials`,
  CART: `${API_BASE_URL}/api/cart`,
  CART_ITEM: (id) => `${API_BASE_URL}/api/cart/${id}`,
  HEALTH: `${API_BASE_URL}/api/health`,
  TEST: `${API_BASE_URL}/api/test`,
};

export default API_BASE_URL; 