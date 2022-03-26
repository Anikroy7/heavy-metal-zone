import React from 'react';
import Selecteditem from '../Selecteditem/Selecteditem';
import './Cart.css'
const Cart = (props) => {

    const addedProducts = props.cart;
    // console.log(addedProducts)

    const handleChoosePd = (product) => {
        let randomName = product[0];

        const choosenpdNumber = product.length;
        const randomNumber = Math.round(Math.random() * choosenpdNumber);
        randomName = product[randomNumber].name;
        console.log(randomName)
        return randomName;
    }

    return (
        <div className='cart'>
            <h2 className="text-center">Ordered Item</h2>
            <div>
                {
                    addedProducts.map(product => <Selecteditem product={product} key={product.id} random={handleChoosePd}></Selecteditem>)
                }
            </div>
            <div>
                <button onClick={() => handleChoosePd(addedProducts)} className="choose-btn">
                    <span>Choose one for you</span>
                </button>
            </div>

        </div>
    );
};

export default Cart;