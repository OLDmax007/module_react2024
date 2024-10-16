import React, { FC } from 'react';
import {IUserModel} from '../../models/IUserModel';

const User:FC<IUserModel> = ({name, age, status}) => {
    return (
        <div>
            <strong>
            {name} {age} {status.toString()}
            </strong>
        </div>
    );
};

export default User;