import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {usersSerive} from "../services/api.dummyjson.service";

type UserProps = {
    user: IUser
}


const User:FC<UserProps> = ({user: {id, firstName, lastName}}) => {
    return (
        <div>
            <h3>{id} {firstName} {lastName}</h3>
        </div>
    );
};

export default User;