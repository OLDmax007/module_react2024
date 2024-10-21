import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {IApiUsers} from "../../models/IApiUsers";

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data:IApiUsers) => {
                setUsers(data.users)
            });
    }, [])


    console.log(users)

    return (
        <div>
            {users.map((user:IUser) => (
                <p key={user.id}>{user.id}</p>
            ))}
        </div>
    );
};

export default Users;