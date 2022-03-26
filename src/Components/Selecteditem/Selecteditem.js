import React from 'react';

const Selecteditem = (props) => {
    const { name } = props.product;
    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Selecteditem;