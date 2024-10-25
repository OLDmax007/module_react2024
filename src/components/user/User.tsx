import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import '../cssComponents/GeneralCssComponents.css'
import {Link} from "react-router-dom";

type TypeUser = {
    user: IUser,
    children?: React.ReactNode
}

const User:FC<TypeUser> = ({user}) => {
    return (
        <div className={'user'}>
            <Link state={user} to={user.id.toString()}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.company.name}</p>
            </Link>
        </div>
    );
};

export default User;