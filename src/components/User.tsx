import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type TypeUser = {user: IUser}
const User:FC<TypeUser> = ({user}) => {
    const {id, firstName, lastName} = user


    return (
        <div>
            {id} {firstName} {lastName}
        </div>
    );
};

export default User;