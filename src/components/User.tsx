import React, {FC} from 'react';
import {IUser} from "../models/IUser";
type TypeUserProps = {
    user: IUser;
    children?: React.ReactNode;
    printUser: (user:IUser)=>IUser
}
const User:FC<TypeUserProps> = ({user, children, printUser}) => {
    const {id, firstName} = user
    return (
        <div>
            {id} {firstName} {children}
            <button onClick={() => {
                console.log(printUser(user));
            }}>
                Click
            </button>
        </div>
    );
};

export default User;