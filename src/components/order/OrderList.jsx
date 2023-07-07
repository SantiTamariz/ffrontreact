import React from 'react';
import Order from './Order';
import './OrderList.css';

function OrderList({ orders }) {
  return (
    <div>
      {orders.map((order, index) => (
        <div key={order.idOrder} className="order-item">
          <h3>Order number: {index + 1}</h3>
          <h4>Total Price: ${order.totalPrice.toFixed(2)}</h4>
          <Order products={order.products} />
        </div>
      ))}
    </div>
  );
}

export default OrderList;
