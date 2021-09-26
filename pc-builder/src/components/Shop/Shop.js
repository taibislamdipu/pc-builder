import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function callApi() {
            let data = await fetch('./products.json');
            data = await data.json();
            setItems(data);
        }
        callApi();

    }, [])

    const handleAddToCart = (items) => {
        const newCart = [...cart, items];
        setCart(newCart);

    }


    return (
        <div className="shop-container">

            <div className="products-container">

                <div className="product-container">
                    {
                        items.map(item => <Product

                            key={item.id}
                            item={item}
                            handleAddToCart={handleAddToCart}

                        >
                        </Product>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;