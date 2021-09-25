import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log('cart props', props);

    const name = props.cart.name;
    // const price = props.cart.price;


    // const totalReducer = (previous, item) => previous + item.price;
    // const total = cart.reduce(totalReducer, 0);

    // console.log(price);
    // console.log('cart', cart);
    // console.log('total', total);

    const cart = props.cart;

    // const total = cart.reduce((previous, item) => previous + item.price, 0)

    // let total = 0;
    // for (const item of cart) {
    //     total += item + item.price;
    //     console.log('total', total);

    // }



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