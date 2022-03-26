import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <main className='shop-container'>
            <section className='products'>
                {
                    products.map(product => <Products products={product} key={product.id}></Products>)
                }
            </section>

            <section className='ordered'>This is select</section>
        </main>
    );
};

export default Shop;