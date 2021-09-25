import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log('props.cart', props.cart);

    const name = props.cart.name;

    // const item = props.cart;
    // const totalReducer = (previous, item) => previous + item.price;
    // const total = item.reduce(totalReducer, 0)
    // console.log('total', total);


    // console.log('totalPrice');
    return (
        <div className="">
            {/* <h3>Total Cost: {total}</h3> */}
            <ul>
                <li>{name}</li>
            </ul>

        </div>
    );
};

export default Cart;