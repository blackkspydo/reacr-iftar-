
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, picture, price, quantity } = props.product
    const { handleCart } = props

    return (
        <div className='product-container'>
            <div className="product">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h4>{quantity}</h4>
                <h4>Price: {price}</h4>

            </div>


            <button onClick={() => handleCart(props.product)} className='button'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;