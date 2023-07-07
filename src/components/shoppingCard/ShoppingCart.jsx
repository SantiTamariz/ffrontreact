import React from 'react';
import ShoppingCard from './ShoppingCard';

function ShoppingCart({ cart, removeFromCart, decreaseFromCart, increaseFromCart, handlePlaceOrder }) {

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
                  key={product.idProduct}
                  product={product}
                  removeFromCart={removeFromCart}
                  decreaseFromCart={decreaseFromCart}
                  increaseFromCart={increaseFromCart}
                />
              </div>
            ))}
          </ul>
          <p className="final-price">
            Final Price: ${cart.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            ).toFixed(2)}
          </p>

         {cart.length!=0 && <button className="btn btn-primary" data-toggle="modal" data-target="#modalOrder">
            Place Order
          </button>}

          <div className="modal" id="modalOrder" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">The order has been placed, thank you</div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                    handlePlaceOrder();
                  }}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;