import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

type FormProps = {
    fname: string,
    password: string,
    age: number,
}

const Form = () => {
    const {handleSubmit, register, formState: {
        errors,
        isValid
    }} = useForm<FormProps>({
     mode: "all"
    });

    // useEffect(() => {
    //     console.log("errs: ", errors);
    // }, [errors]);

    const customHandler = (formData:FormProps) => {
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label htmlFor="">
                <input type="text"  {...register('fname', {
                    required: {value: true, message: 'field is required'},
                    maxLength: {value: 10, message: 'first name is long'},
                    minLength: {value: 5, message: 'firts name is small'}
                })}/>

                {errors.fname && <div>
                    {errors.fname.message}
                </div>}

            </label>
            <label htmlFor="">
                <input type="password"  {...register('password', {
                    required: {value: true, message: 'field is required'},
                    maxLength: {value: 20, message: 'password is long'},
                    minLength: {value: 10, message: 'password is small'}
                })}/>
                {errors.password && <div>
                    {errors.password.message}
                </div>}
            </label>
            <label htmlFor="">
                <input type="number"  {...register('age', {
                    required: {value: true, message: 'field is required'},
                    max: {value: 60, message: 'age is big'},
                    min: {value: 18, message: 'age is small'}
                })}/>

                {errors.age && <div>
                    {errors.age.message}
                </div>}
            </label>
            <button disabled={!isValid}>Ok</button>
        </form>
    );
};

export default Form;