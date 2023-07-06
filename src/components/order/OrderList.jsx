import React from 'react';
import Order from './Order';
import './OrderList.css';


function OrderList({ orders }) {
  return (
    <div>
      {orders.map((order) => (
        <div key={order.idOrder} className="order-item">
          <h3>Order number: {order.idOrder}</h3>
          <h4>Total Price: ${order.totalPrice.toFixed(2)}</h4>
          <Order products={order.products} />
        </div>
      ))}
    </div>
  );
}

export default OrderList;
