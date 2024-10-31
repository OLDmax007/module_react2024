import React, {useEffect, useState} from 'react';
import User from "./User";
import {usersSerive} from "../services/api.dummyjson.service";
import {IUser} from "../models/IUser";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        usersSerive.getAllUsers().then((data: IUser[]) => setUsers(data))
    }, []);


    return (
        <div>
            {users.map((user:IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;