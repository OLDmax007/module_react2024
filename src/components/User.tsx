import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type TypeUser = {user: IUser}
const User:FC<TypeUser> = ({user}) => {



    return (
        <div>
            {user.id}
        </div>
    );
};

export default User;