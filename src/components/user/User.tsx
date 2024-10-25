import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
type TypeUser = {
    user: IUser,
    children?: React.ReactNode
}

const User:FC<TypeUser> = ({user:{id, name, company}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{company.name}</p>
        </div>
    );
};

export default User;