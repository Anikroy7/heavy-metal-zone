import React from 'react';
import './Selecteditem.css'
const Selecteditem = (props) => {
    let { name } = props.product;

    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Selecteditem;