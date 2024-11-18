import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import {StoreType} from "../models/StoreType";
import {IUser} from "../models/IUser";
import {userService} from "../services/api.dj.service";

const UsersPage = () => {

    const {userSlice:{fillUsers, allUsers}}:StoreType = useContext(Context)

    useEffect(() => {
        userService.getAllUsers().then((data:IUser[]) => {fillUsers(data)} )
    }, [allUsers]);


    return (
        <div>
            <ul>
                {allUsers.map((user: IUser) => (
                    <li key={user.id}>
                        {user.birthDate}
                    </li>
                ))}
                UsersPage
            </ul>
</div>
    );
};

export default UsersPage;