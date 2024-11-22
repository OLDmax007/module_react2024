import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {IUser} from "../../models/IUser";

const Users = () => {
    const {userSlice:{users}} = useAppSelector(state => state)
        const dispatch = useAppDispatch()


        useEffect(() => {
            dispatch()
        }, []);

        return (
        <div>
            {users.map((user:IUser)=> (
                <div>{user.username}</div>
            ))}
        </div>
    );
};

export default Users;