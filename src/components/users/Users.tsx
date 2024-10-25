import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/api.jsonplaceholder.service";
import {IUser} from "../../models/IUser";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        usersService.getUsers().then((data: IUser[]) => setUsers(data))
    }, []);

    console.log(users)

    return (
        <div>
            {users.map((user: IUser) => (
                <User key={user.id} user={user}/>
            ))
            }
        </div>
    );
};

export default Users;