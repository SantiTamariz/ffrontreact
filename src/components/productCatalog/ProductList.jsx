import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ categories, products, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    filterProducts();
  }, [products]);

  const filterProducts = (categoryId) => {
    if (selectedCategory === categoryId) {
      // Clear the filter if the same category is clicked again
      setSelectedCategory(null);
      setFilteredProducts([]);
    } else {
      setSelectedCategory(categoryId);
      setFilteredProducts(products.filter((product) => product.category === categoryId));
    }
  };

  return (
    <div className="col-lg-8 col-md-4 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h5>Categories</h5>
        </div>
        <div className="card-body">
          <ul className="list-group category-list" id="category-list">
            {categories &&
              categories.map((category) => (
                <React.Fragment key={category.id}>
                  <li className="list-group-item">
                    <a
                      href="#"
                      className={`category-link${selectedCategory === category.id ? ' active' : ''}`}
                      data-category={category.id}
                      onClick={(event) => {
                        event.preventDefault();
                        filterProducts(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>

                  {selectedCategory === category.id &&
                    filteredProducts.map((product) => (
                      <div className="card mb-2" key={product.id}>
                        <ProductCard product={product} addToCart={addToCart} />
                      </div>
                    ))}
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
