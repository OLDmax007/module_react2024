import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";
import {IUserForm} from "../models/IUserForm";

type FormProps = {
        setFormData: (data: IUserForm) => void;
    }

    const FormUser:FC<FormProps> = ({setFormData}) => {

        const {
            handleSubmit, register, formState:
                {
                    errors, isValid
                }
        } = useForm<IUserForm>({mode: 'all', resolver: joiResolver(userValidator)})


        const submitForm = (data: IUserForm) => {
            setFormData(data)
        }

        return (
            <div>
            <form method={'POST'} onSubmit={handleSubmit(submitForm)}>
                <label htmlFor="">Username<input {...register('username')}/></label>
                {errors.username && <span>{errors.username.message}</span>}
                <label htmlFor="">Password<input {...register('password')}/></label>
                {errors.password && <span>{errors.password.message}</span>}
                <button disabled={!isValid}>Confirm</button>
            </form>
            </div>

        );
    };

    export default FormUser;