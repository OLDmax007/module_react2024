import React from 'react';
import {IUser} from "../../models/IUser";

const Users = () => {

    return (
        <div>
            {allUsers.map((user:IUser) => (
                <div key={user.id}>
                    {user.id} {user.username}
                </div>
            ))}
        </div>
    );
};

export default Users;