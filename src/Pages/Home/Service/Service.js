import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className='Service pb-3'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h3>{price}</h3>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div >
    );
};

export default Service;