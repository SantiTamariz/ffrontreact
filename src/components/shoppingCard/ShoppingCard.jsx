import React from 'react';
import './ShoppingCard.css';

function ShoppingCard({ product, removeFromCart, decreaseFromCart, increaseFromCart }) {
    const { code, image, name, price, quantity } = product;

    const removeFromCartItem = () => {
        removeFromCart(product);
    }

    const decreaseFromCartItem = () => {
        decreaseFromCart(product);
    }

    const increaseFromCartItem = () => {
        increaseFromCart(product);
    }

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
                    <p className="card-text">Total price: ${(price*quantity).toFixed(2)}</p>
                    <p className={`card-text stock`}>Quantity: {quantity}</p>
                    <button className="btn btn-primary" onClick={removeFromCartItem}>
                        Remove from Cart
                    </button>
                    <div className='button-plus-less'>
                    <button
                        className={`btn btn-primary ${product.stock === 0 ? 'out-of-stock' : ''}`}
                        onClick={increaseFromCartItem}
                        disabled={product.stock === 0}
                    >
                        +
                    </button>

                    <button className="btn btn-primary" onClick={decreaseFromCartItem}>
                        -
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCard;
