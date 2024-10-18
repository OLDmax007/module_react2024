import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IApiUsers} from "../models/IApiUsers";
import User from "./User";

type TypeUsersProps = {
    printUser:(user:IUser)=>void;
    showTodoOfUser: (user:IUser)=>void
}

const Users: FC<TypeUsersProps> = ({printUser, showTodoOfUser}) => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=3')
            .then(res => res.json())
            .then((data: IApiUsers) => {
                setUsers(data.users)
            });
    }, []);


    return (
        <div>

            {
                users.map((user: IUser) => <User user={user} printUser={printUser} showTodoOfUser={showTodoOfUser} key={user.id}/>)
            }

        </div>
    );
};

export default Users;



