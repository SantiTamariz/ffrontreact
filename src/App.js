import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import ProductList from './components/productCatalog/ProductList';
import Footer from './components/footer/Footer';
import ShoppingCart from './components/shoppingCard/ShoppingCart';
import data from './data.json';
import Login from './components/login/Login';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/products/list')
      .then(response => response.json())
      .then(data => setProducts(data));

    fetch('http://localhost:8080/categories/list')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const handleLogin = (id) => {
    setIsLoggedIn(true);
    setUserId(id);
  };

  const addToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
      setCart([...cart]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const decreaseFromCart = (product) => {
    product.quantity -= 1;
    product.stock += 1;

    if (product.quantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart]);
    }
  };

  const increaseFromCart = (product) => {
    product.quantity += 1;
    product.stock -= 1;
    setCart([...cart]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    product.stock += product.quantity;
  };

  const handleNewCategory = (category) => {
    setCategories([...categories, category]);
  };

  const handleNewProduct = (product) => {
    setProducts([...products, product]);
  };

  const handlePlaceOrder = () => {
    setCart([]);
  };

  if (!isLoggedIn) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <div>
      <Header
        handleNewCategory={handleNewCategory}
        handleNewProduct={handleNewProduct}
        categories={categories}
        products={products}
      />
      <div className="container-fluid">
        <ProductList categories={categories} products={products} addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          increaseFromCart={increaseFromCart}
          decreaseFromCart={decreaseFromCart}
          handlePlaceOrder={handlePlaceOrder}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
