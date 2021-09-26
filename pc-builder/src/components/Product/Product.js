import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {

    // receive data from Shop.js and checking the object is it in the array or not 
    const item = props.hasOwnProperty('item') ? props.item : null;
    const image = props.item.hasOwnProperty('image') ? props.item.image : null;
    const name = props.item.hasOwnProperty('name') ? props.item.name : null;
    const price = props.item.hasOwnProperty('price') ? props.item.price : null;
    const brand = props.item.hasOwnProperty('brand') ? props.item.brand : null;
    const star = props.item.hasOwnProperty('star') ? props.item.star : null;
    const reviewCount = props.item.hasOwnProperty('reviewCount') ? props.item.reviewCount : null;

    // Add clicked item into cart function receive from Shop.js
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="single-product-item ">
            <img className="item-image" src={image} alt="" />
            <p className="item-name">{name}</p>

            <div className="d-flex justify-content-center">
                <div className="rating">
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    />
                </div>
                <p className="ms-2">{reviewCount} Reviews</p>

            </div>
            <p>Brand: {brand}</p>
            <p><b>${price}</b></p>
            <button onClick={() => handleAddToCart(item)} className="btn btn-success">
                <FontAwesomeIcon icon={faShoppingCart} /> Add
            </button>
        </div>
    );
};

export default Product;