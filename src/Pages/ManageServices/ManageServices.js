import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id) => {
        const uri = `http://localhost:5000/services/${id}`
        fetch(uri, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const updateServices = services.filter(service => service._id !== id)
                    setServices(updateServices);
                }
            })
    }
    return (
        <div className='d-flex flex-column justify-center align-items-center'>
            <h2>Manage Services</h2>
            {
                services.map(service =>
                    <div key={service._id} className='mt-5 bg-dark text-light w-50 p-4 rounded'>
                        <h2>{service.name}</h2>
                        <button className='btn btn-danger mt-2' onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;