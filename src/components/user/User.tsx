import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type TypeUser = {
    user: IUser
    lift: (user:IUser) => void
    children?: React.ReactNode
}


const User:FC<TypeUser> = ({user, lift}) => {
    const {id, firstName, lastName, age} = user

    return (
        <div>
            <h3>User: {id}</h3>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{age}</p>
            <button onClick={() => {
                    lift(user)
            }}>Click</button>
        </div>
    );
};

export default User;