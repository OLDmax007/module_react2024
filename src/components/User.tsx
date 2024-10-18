import React, {FC} from 'react';
import {IUser} from "../models/IUser";

const User:FC<IUser> = ({id}) => {

    return (
        <div>
            {id}
        </div>
    );
};

export default User;