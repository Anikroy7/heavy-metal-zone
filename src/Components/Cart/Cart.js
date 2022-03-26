import React from 'react';
import Selecteditem from '../Selecteditem/Selecteditem';
import './Cart.css'
const Cart = (props) => {

    const addedProducts = props.cart;
    // console.log(addedProducts)



    return (
        <div className='cart'>
            <h2>Ordered Item</h2>
            <div className='cart-item'>
                {
                    addedProducts.map(product => <Selecteditem product={product} key={product.id}></Selecteditem>)
                }
            </div>
        </div>
    );
};

export default Cart;