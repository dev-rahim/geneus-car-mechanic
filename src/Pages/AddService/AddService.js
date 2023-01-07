import React from 'react';
import { useForm } from "react-hook-form";
import './Add-service.css'

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='add-service'>
            <h2>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, })} />
                <input type='number' placeholder='Price' {...register("price",)} />
                <textarea placeholder='Description' type="text" {...register("description",)} />
                <input placeholder='img Url' type="text" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;