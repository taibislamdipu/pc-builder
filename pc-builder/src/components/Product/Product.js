import React from 'react';
import './Product.css';

const Product = (props) => {


    const image = props.item.hasOwnProperty('image') ? props.item.image : null;
    const name = props.item.hasOwnProperty('name') ? props.item.name : null;
    const price = props.item.hasOwnProperty('price') ? props.item.price : null;
    const core = props.item.hasOwnProperty('core') ? props.item.core : null;
    const star = props.item.hasOwnProperty('star') ? props.item.star : null;
    const reviewCount = props.item.hasOwnProperty('reviewCount') ? props.item.reviewCount : null;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="single-product-item">
            <img className="item-image" src={image} alt="" />
            <p>{name}</p>
            <p>{star} / {reviewCount} Reviews </p>
            <p></p>
            <p>core: {core}</p>
            <p><b>${price}</b></p>
            <button onClick={() => handleAddToCart(name)}>
                Add
            </button>
        </div>
    );
};

export default Product;