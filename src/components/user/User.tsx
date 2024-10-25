import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import '../cssComponents/GeneralCssComponents.css'
import {Link} from "react-router-dom";

type TypeUser = {
    user: IUser,
    children?: React.ReactNode
}

const User:FC<TypeUser> = ({user:{id, name, company}}) => {
    return (
        <div className={'user'}>
            <Link to={id.toString()}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{company.name}</p>
            </Link>
        </div>
    );
};

export default User;