import React from 'react';
import './Users.css';
import {users} from './usersData';
import User from '../../components/user/User';
import {IUserModel} from '../../models/IUserModel';

const Users = () => {
    return (
        <div>
            {
                users.map(({name, age, status}: IUserModel) => <User name={name} age={age}
                                                                        status={status}></User>)
            }
        </div>
    );
};

export default Users;