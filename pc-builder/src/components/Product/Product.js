import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const item = props.item;
    const image = props.item.hasOwnProperty('image') ? props.item.image : null;
    const name = props.item.hasOwnProperty('name') ? props.item.name : null;
    const price = props.item.hasOwnProperty('price') ? props.item.price : null;
    const brand = props.item.hasOwnProperty('brand') ? props.item.brand : null;
    const star = props.item.hasOwnProperty('star') ? props.item.star : null;
    const reviewCount = props.item.hasOwnProperty('reviewCount') ? props.item.reviewCount : null;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="single-product-item">
            <img className="item-image" src={image} alt="" />
            <p>{name}</p>
            <p>{star} / {reviewCount} Reviews </p>
            <p>Brand: {brand}</p>
            <p><b>${price}</b></p>
            <button onClick={() => handleAddToCart(item)} className="btn btn-success">
                <FontAwesomeIcon icon={faShoppingCart} /> Add
            </button>
        </div>
    );
};

export default Product;