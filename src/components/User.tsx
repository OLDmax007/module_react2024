import React, {FC} from 'react';
import {IUser} from "../models/IUser";
type TypeUser = {
    user: IUser;
    children?: React.ReactNode;
}
const User:FC<TypeUser> = ({user, children}) => {
    const {id, firstName} = user
    return (
        <div>
            {id} {firstName} {children}
        </div>
    );
};

export default User;