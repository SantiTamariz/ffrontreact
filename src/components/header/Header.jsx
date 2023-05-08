import React, { useState } from 'react';
import NewCategory from '../newCategory/NewCategory';
import NewProduct from '../newProduct/NewProduct';
import './Header.css';


function Header({ handleNewCategory, handleNewProduct, categories, products }) {
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [showNewProductModal, setShowNewProductModal] = useState(false);

  const showNewCategory = () => {
    setShowNewCategoryModal(true);
  };

  const hideNewCategory = () => {
    setShowNewCategoryModal(false);
    // Remove the modal backdrop manually
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }

  };

  const showNewProduct = () => {
    setShowNewProductModal(true);
  };

  const hideNewProduct = () => {
    setShowNewProductModal(false);
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
  };


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Online Store</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item button-margin">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-product-modal" id="new-product" onClick={showNewProduct}>New Product</button>
            </li>
            <li className="nav-item button-margin">
              <button className="btn btn-primary" data-toggle="modal" data-target="#new-category-modal" id="new-category" onClick={showNewCategory}>New Category</button>
            </li>
          </ul>
        </div>
      </nav>
      {showNewCategoryModal && <NewCategory handleNewCategory={handleNewCategory} hideNewCategory={hideNewCategory} categories={categories} />}
      {showNewProductModal && <NewProduct handleNewProduct={handleNewProduct} hideNewProduct={hideNewProduct} categories={categories} products={products} />}
    </header>
  );
}

export default Header;
