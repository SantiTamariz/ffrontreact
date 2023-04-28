import React from 'react';
import './ShoppingCard.css';

function ShoppingCard({ product, removeFromCart }) {
  const { code, image, name, price, quantity } = product;

  const removeFromCartItem = () => {
   removeFromCart(product);
    //product.stock--;
  };

  return (
    <div className="card-product" data-code={code}>
      <div className="card-img">
        <img
          className={`card-img-top product-img-${code}`}
          src={image}
          alt={name}
        />
      </div>
      <div className="card-body">
        <div className="card-info">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Code: {code}</p>
          <p className="card-text">Price: ${price.toFixed(2)}</p>
          <p className={`card-text stock`}>Stock: {quantity}</p>
          <button className="btn btn-primary" onClick={removeFromCartItem}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
