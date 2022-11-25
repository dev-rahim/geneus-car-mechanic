import React from 'react';

const Expart = ({ expart }) => {
    const { name, img } = expart;
    return (
        <div id='' className='col-lg-4 col-12 col-md-6 p-2'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Expart;