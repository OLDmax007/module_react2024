import React from 'react';
import {useForm} from "react-hook-form";
import {IFormData} from "../models/IFormData";
import {userValidator} from "../validators/user.validator";

const Form = () => {
    const {handleSubmit,
        register,
        formState: {errors, isValid}} = useForm<IFormData>(userValidator);

    const toSubmitForm = (formData: IFormData) => {
        console.log(formData)
    }

    return (
        <form method={'POST'} onSubmit={handleSubmit(toSubmitForm)}>
            <label htmlFor="">
                <input type="text" placeholder={'First name'} {...register('firstname')}/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder={'Last name'} {...register('lastname')}/>
            </label>
            <label htmlFor="">
                <input type="password" placeholder={'Password'}{...register('password')} />
            </label>
            <label htmlFor="">
                <input type="email" placeholder={'Email'} {...register('email')}/>
            </label>
            <label htmlFor="">
                <input type="number" placeholder={'Age'} {...register('age')}/>
            </label>
            <label htmlFor="">
                <input type="radio" defaultChecked={true} value={'single'} {...register('marriedStatus')}/>
                <p>Single</p>
            </label>
            <label htmlFor="">
                <input type="radio" value={'married'} {...register('marriedStatus')}/>
                <p>Married</p>
            </label>
            <label htmlFor="">
                <input type="date" placeholder={'Birth date'} {...register('birthDate')}/>
            </label>
            <button type={'submit'}>Send</button>
        </form>
    );
};

export default Form;