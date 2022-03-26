import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    const handelCartEvent = (products) => {
        const newItem = [...cartItems, products];
        setCartItems(newItem);

    }

    return (
        <main className='shop-container'>
            <section className='products'>
                {
                    products.map(product => <Products products={product} key={product.id} handelCartEvent={handelCartEvent}></Products>)
                }
            </section>

            <section className='ordered  p-2'>
                <Cart cart={cartItems}></Cart>
            </section>
        </main >
    );
};

export default Shop;