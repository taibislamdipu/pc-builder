import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log('props.cart', props.cart);

    const name = props.cart;
    // const { cart } = props.cart;
    // console.log('product', cart);
    // const totalReducer = (previous, item) => previous + product.price;
    // const total = product.reduce(totalReducer, 0)


    // console.log('totalPrice');
    return (
        <div>
            {/* <h3>Total Cost: {total}</h3> */}
            <ul>
                <li>{name}</li>
            </ul>

        </div>
    );
};

export default Cart;