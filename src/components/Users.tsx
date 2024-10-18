import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IApiUsers} from "../models/IApiUsers";
import User from "./User";

type TypeUsersProps = {
    func:()=>string
}

const Users: FC<TypeUsersProps> = ({func}) => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data: IApiUsers) => {
                console.log(data)
                setUsers(data.users)
            });
    }, []);


    return (
        <div>

            {
                users.map((user: IUser) => <User user={user} key={user.id}/>)
            }

            <div> {func()}</div>
        </div>
    );
};

export default Users;



