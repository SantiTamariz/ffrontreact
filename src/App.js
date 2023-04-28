import logo from './logo.svg';
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
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <ProductList categories={categories} products={products} />
        <ShoppingCart cart={cart} />
      </div>
      <Footer />
    </div>
  );
}


export default App;

