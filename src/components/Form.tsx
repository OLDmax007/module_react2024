import React from 'react';
import {useForm} from "react-hook-form";
import {IFormData} from "../models/IFormData";
import {userValidator} from "../validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";

const Form = () => {
    const {handleSubmit,
        register,
        formState: {errors, isValid}} =
        useForm<IFormData>({mode: "all", resolver: joiResolver(userValidator)});

    const toSubmitForm = (formData: IFormData) => {
        console.log(formData);
    };

    return (
        <form method={'POST'} onSubmit={handleSubmit(toSubmitForm)}>
            <div className="input-block">
                <label htmlFor="firstname">
                    <input type="text" placeholder={'First name'} {...register('firstname')}/>
                </label>
                {errors.firstname && <div>{errors.firstname.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="lastname">
                    <input type="text" placeholder={'Last name'} {...register('lastname')}/>
                </label>
                {errors.lastname && <div>{errors.lastname.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="age">
                    <input type="number" placeholder={'Age'} {...register('age')}/>
                </label>
                {errors.age && <div>{errors.age.message}</div>}
            </div>


            <div className="input-block">
                <label htmlFor="email">
                    <input type="email" placeholder={'Email'} {...register('email')}/>
                </label>
                {errors.email && <div>{errors.email.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="password">
                    <input type="password" placeholder={'Password'} {...register('password')}/>
                </label>
                {errors.password && <div>{errors.password.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="single">
                    <input type="radio" defaultChecked={true} value={'single'} {...register('marriedStatus')}/>
                    Single
                </label>
                {errors.marriedStatus && <div>{errors.marriedStatus.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="married">
                    <input type="radio" value={'married'} {...register('marriedStatus')}/>
                    Married
                </label>
                {errors.marriedStatus && <div>{errors.marriedStatus.message}</div>}
            </div>

            <div className="input-block">
                <label htmlFor="birthDate">
                    <input type="date" placeholder={'Birth date'} {...register('birthDate')}/>
                </label>
                {errors.birthDate && <div>{errors.birthDate.message}</div>}
            </div>

            <button disabled={isValid} type={'submit'}>Send</button>
        </form>
    );
};

export default Form;
