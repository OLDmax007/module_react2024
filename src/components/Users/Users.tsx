import React, {useEffect} from 'react';
import mainStore from "../../store/store";
import {userService} from "../../services/api.jp.service";
import {IUser} from "../../models/IUser";

const Users = () => {
    const {userSlice:{allUsers, fillUsers}} = mainStore()


    useEffect(() => {
        userService.getAllUsers().then((data:IUser[]) => fillUsers(data))
    }, []);



    return (
        <div>
            {allUsers.map((user:IUser) => (
                <div key={user.id}>
                    {user.id} {user.username}
                </div>
            ))}
        </div>
    );
};

export default Users;