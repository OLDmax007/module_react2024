import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {IApiUsers} from "../../models/IApiUsers";
import User from "../user/User";
import {getUsers} from "../../services/api.users.service";

type TypeUsers = {
    lift: (user: IUser) => void
}

const Users: FC<TypeUsers> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
            getUsers()
            .then((data: IApiUsers) => {
                setUsers(data.users)
            });
    }, [])

    return (
        <div>
            {
                users.map((user: IUser) => (
                    <User key={user.id} user={user} lift={lift}/>
                ))
            }
        </div>
    );
};

export default Users;