import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import ProductList from './components/productCatalog/ProductList';
import Footer from './components/footer/Footer';
import ShoppingCart from './components/productCard/ShoppingCart';
import data from './data.json';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load product data from JSON file
    setProducts(data.products);
    setCategories(data.categories);
  }, []);

  const addToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
      setCart([...cart]);
    }
    else  {
      product.quantity=1;
      setCart([...cart, product]);
    }
  };

  const decreaseFromCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity -= 1;
      setCart([...cart]);
    }
  };

  const removeFromCart = (product) => {
    // Return the quantity of the product to the product stock

    setCart(cart.filter((item) => item.id!== product.id));
  };

  const handleNewCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div>
      <Header handleNewCategory={handleNewCategory} />
      <div className="container">
        <ProductList categories={categories} products={products} addToCart={addToCart}/>
        <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>
      </div>
      <Footer />
    </div>
  );
}


export default App;

