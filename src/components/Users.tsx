import React, {useEffect, useState} from 'react';
import user from "./User";
import {usersSerive} from "../services/api.dummyjson.service";
import {IUser} from "../models/IUser";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        usersSerive.getAll().then((data: IUser[]) => setUsers(data))
    }, []);


    return (
        <div>
            {users.map((user:IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;