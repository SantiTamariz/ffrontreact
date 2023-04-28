import React, { useState } from 'react';
import NewCategory from '../NewCategory';

function Header() {
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]); // Replace with your category state

  const handleNewCategory = () => {
    setShowNewCategoryModal(true);
  };

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setShowNewCategoryModal(false);
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
            <li className="nav-item">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-product-modal" id="new-product">New Product</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" data-toggle="modal" data-target="#new-category-modal" id="new-category">New Category</button>
            </li>
          </ul>
        </div>
      </nav>
      {showNewCategoryModal && <NewCategory addCategory={addCategory} />}
    </header>
  );
}

export default Header;
