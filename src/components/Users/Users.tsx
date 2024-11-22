import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {IUser} from "../../models/IUser";
import {userSliceActions} from "../../store/slices/userSlice";

const Users = () => {
    const {userSlice:{users}} = useAppSelector(state => state)
        const dispatch = useAppDispatch()


        useEffect(() => {
            dispatch(userSliceActions.loadUsers())
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