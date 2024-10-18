import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IApiUsers} from "../models/IApiUsers";
import User from "./User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data: IApiUsers) => {
                setUsers(data.users)
            });
    }, []);

    console.log(users)
    return (

        <div>
            {
                users.map(({id, firstName, lastName, age}: IUser) => <User key={id} id={id} firstName={firstName} lastName={lastName} age={age}/>)
            }
        </div>
    );
};

export default Users;