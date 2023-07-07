import React from 'react';
import './Order.css';

function Order({ products }) {
  return (
    <div className="order2-products">
      {products.map((product) => (
        <div key={product.idProduct} className="card2-product" data-code={product.code}>
          <div className="card2-img">
            <img
              className={`card2-img-top product-img-${product.code} ${product.stock === 0 ? 'out-of-stock' : ''}`}
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="card2-body">
            <div className="card2-info">
              <h5 className="card2-title">{product.name}</h5>
              <p className="card2-text">{product.description}</p>
              <p className="card2-text">Code: {product.code}</p>
              <p className="card2-text">Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
