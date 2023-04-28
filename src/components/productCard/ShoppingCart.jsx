import React from 'react';
import ShoppingCard from './ShoppingCard';

function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h5>Shopping Cart</h5>
        </div>
        <div className="card-body">
          <ul className="list-group cart-list">
            {cart.map((product) => (
                <div className="card mb-2">
                <ShoppingCard
                    key={product.id}
                    product={product}
                    removeFromCart={removeFromCart}
                />
            </div>
              ))}
          </ul>
          <p className="final-price" style={{ display: 'none' }}></p>
          <div className="cart-container"></div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
