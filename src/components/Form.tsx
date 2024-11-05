import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";

type FormProps = {
    fname: string,
    password: string,
    age: number,
}

const Form = () => {
    const {
        handleSubmit, register, formState: {
            errors,
            isValid
        }
    } = useForm<FormProps>({
        mode: "all", resolver: joiResolver(userValidator)
    });


    const customHandler = (formData: FormProps) => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label htmlFor="">
                <input type="text"  {...register('fname')}/>
                {errors.fname && <div>
                    {errors.fname.message}
                </div>}

            </label>
            <label htmlFor="">
                <input type="password" {...register('password')}/>
                {errors.password && <div>
                    {errors.password.message}
                </div>}
            </label>
            <label htmlFor="">
                <input type="number"  {...register('age', {})}/>

                {errors.age && <div>
                    {errors.age.message}
                </div>}
            </label>
            <button disabled={false}>Ok</button>
        </form>
    );
};

export default Form;