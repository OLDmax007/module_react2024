import React from 'react';
import './Users.css';
import {users} from './usersData';

const Users = () => {
    return (
        <div>
            {
                users.map(user => <p>{user.name}, {user.age}, {user.status.toString()}</p>)
            }
        </div>
    );
};

export default Users;