import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ categories, products, addToCart }) {

    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = (categoryId) => {
        if (filteredProducts.length !== 0) {
            setFilteredProducts([]);
        }
        else
            setFilteredProducts(products.filter((product) => product.category === categoryId));
    };

    return (
        <div className="col-lg-8 col-md-4 col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Categories</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group category-list" id="category-list">
                        {categories && categories.map((category) => (
                            <>
                                <li key={category.id} className="list-group-item">
                                    <a
                                        href="#"
                                        className="category-link"
                                        data-category={category.id}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            filterProducts(category.id);
                                        }}
                                    >
                                        {category.name}
                                    </a>

                                </li>

                                {filteredProducts.map((product) => (
                                    product.category === category.id && (
                                        <div className="card mb-2">
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                addToCart={addToCart}
                                            />
                                        </div>
                                    )
                                ))
                                }
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
