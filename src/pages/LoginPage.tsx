import React, {useEffect} from 'react';
import {userService} from "../services/api.dj.service";

const LoginPage = () => {
    useEffect(() => {
        userService.login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        }).then(console.log)
    }, []);

    return (
        <div>

        </div>
    );
};

export default LoginPage;