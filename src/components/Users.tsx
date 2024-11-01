import React, {FC, useEffect, useState} from 'react';
import User from "./User";
import {usersSerive} from "../services/api.dummyjson.service";
import {IUser} from "../models/IUser";
import {useSearchParams} from "react-router-dom";

type UsersProps = {
    setBtnSwitch: (value: boolean) => void
}


const Users:FC<UsersProps> = ({setBtnSwitch}) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page');
        console.log(page)
        if (page) {
            usersSerive.getAllUsers(+page).then((data: { users: IUser[]; flag: boolean }) => {
                setUsers(data.users)
                setBtnSwitch(data.flag)
            })

        }
    }, [query]);


    return (
        <div>
            {users.map((user:IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;