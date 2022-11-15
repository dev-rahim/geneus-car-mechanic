import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='Service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h3>{price}</h3>
            <p>{description}</p>

        </div>
    );
};

export default Service;