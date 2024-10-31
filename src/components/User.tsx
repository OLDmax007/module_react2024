import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {
    user: IUser
}


const User: FC<UserProps> = ({user: {id, firstName, lastName}}) => {
    return (
        <div>
            <Link to={id.toString()}>
                <h3>{id} {firstName} {lastName}</h3>
            </Link>
        </div>
    );
};

export default User;