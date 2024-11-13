import React, {useEffect, useState} from 'react';
import FormUser from "./FormUser";
import {IUserForm} from "../models/IUserForm";
import userService from "../services/api.user.service";

const Login = () => {

    const [formData, setFormData] = useState<IUserForm | null>(null)

    useEffect(() => {
        if (formData) {
                userService.login(formData).then(console.log)
        }
    }, [formData]);


    return (
        <div>
           <FormUser setFormData={setFormData}/>
        </div>
    );
};

export default Login;