import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // receive cart data from shop.js 
    const cart = props.cart;

    // finding the total cost of the added item into cart
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div>
            <h3>Product Added: {cart.length}</h3>
            <h4>Total Cost: ${totalCost}</h4>
            <hr />
            <div >
                <h5 className="text-center">Your selected items</h5>
                {
                    cart.map(item =>
                        <div className="cart-item">
                            <p>{item.name}</p>
                            <img className="cart-image" src={item.image} alt="" /> = ${item.price}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;