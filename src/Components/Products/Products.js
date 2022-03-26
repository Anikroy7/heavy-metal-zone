import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css'

const products = (props) => {


    const { name, id, price, image } = props.products;

    return (
        <section>
            <div className='product'>

                <img src={image} alt="" />
                <div>
                    <h3>Name: {name}</h3>
                    <h4 className='text-danger'>price: ${price}</h4>
                    <h5>Id: {id}</h5>
                    <div onClick={() => props.handelCartEvent(props.products)}>
                        <button className='cart-btn'>
                            <span className='me-3'>Add to cart</span>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default products;