import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = (props)
    return (
        <div className='cart'>
            <h2>Ordered Item:{cart.length}</h2>
        </div>
    );
};

export default Cart;