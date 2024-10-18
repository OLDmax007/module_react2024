import React, {FC} from 'react';
import {IUser} from "../models/IUser";
type TypeUserProps = {
    user: IUser;
    children?: React.ReactNode;
    printUser: (user:IUser)=>void;
    showTodoOfUser: (user:IUser)=>void
}
const User:FC<TypeUserProps> = ({user, children, printUser, showTodoOfUser}) => {
    const {id, firstName} = user
    return (
        <div>
            {id} {firstName} {children}
            <button onClick={() => {
                printUser(user)
                showTodoOfUser(user)
            }}>
                Click
            </button>
        </div>
    );
};

export default User;