import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {handleSubmit, register} = useForm();


    const customHandler = (formData:any) => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label htmlFor="">
                <input type="text"  {...register('fname')} />
            </label>

            <label htmlFor="">
                <input type="text"  {...register('lname')}/>
            </label>
            <button>Ok</button>
        </form>
    );
};

export default Form;