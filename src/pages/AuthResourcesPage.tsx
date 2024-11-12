import React, {useEffect} from 'react';
import {userService} from "../services/api.dj.service";
import {useNavigate} from "react-router-dom";

const AuthResourcesPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        userService.loadAuthProductsOfUser().then(console.log).catch(reason => {
            userService.refreshToken().then((data) => {
                userService.loadAuthProductsOfUser().then(console.log)
            })
        })
    }, []);

    return (
        <div>

        </div>
    );
};

export default AuthResourcesPage;