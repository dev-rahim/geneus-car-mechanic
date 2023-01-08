import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h3>This is booking- {serviceId}</h3>
            <h2>{service.name}</h2>
        </div>
    );
};

export default Booking;