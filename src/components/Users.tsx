import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IApiUsers} from "../models/IApiUsers";

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data:IApiUsers) => {
                setUsers(data.users)
            });
    }, []);



    return (
        <div>
            {users.map((user: IUser) => <p key={user.id}>{user.firstName}</p> )}
        </div>
    );
};

export default Users;