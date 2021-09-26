import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log('cart props', props);

    const cart = props.cart;

    const TotalCost = cart.reduce((sum, item) => sum + item.price, 0)


    return (
        <div className="">
            <h3>Product Added: {cart.length}</h3>
            <h4>Total Cost: ${TotalCost}</h4>
            <hr />
            {
                cart.map(item =>
                    <ul>
                        <li>{item.name}</li>
                        <img className="cart-image" src={item.image} alt="" /> = ${item.price}
                    </ul>
                )
            }
        </div>
    );
};

export default Cart;