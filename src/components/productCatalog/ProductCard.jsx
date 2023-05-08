import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
    const { code, image, name, description, price, stock } = product;

    const handleAddToCart = () => {
        addToCart(product);
        product.stock--;
    };

    return (
        <div className="card-product" data-code={code}>
            <div className="card-img">
                <img
                    className={`card-img-top product-img-${code} ${stock === 0 ? 'out-of-stock' : ''}`}
                    src={image}
                    alt={name}
                />
            </div>
            <div className="card-body">
                <div className="card-info">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Code: {code}</p>
                    <p className="card-text">Price: ${price.toFixed(2)}</p>
                    <p className={`card-text stock ${stock === 0 ? 'out-of-stock' : ''}`}>Stock: {stock}</p>

                    <button
                        className={`btn btn-primary ${product.stock === 0 ? 'out-of-stock' : ''}`}
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
