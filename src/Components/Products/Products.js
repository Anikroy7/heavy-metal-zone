import React from 'react';
import './Products.css'

const products = (props) => {

    const { name, id, price, image } = props.products;
    console.log(image)

    return (
        <section>
            <div className='product'>

                <div>
                    <img src={image} alt="" />
                    <h2>Name: {name}</h2>
                    <h3>price: ${price}</h3>
                    <h5>Id: {id}</h5>
                    <div>
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default products;