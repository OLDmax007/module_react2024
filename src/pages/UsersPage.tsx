import React, {useEffect} from 'react';
import {IUser} from "../models/IUser";
import mainStore from "../store/store";
import {userService} from "../services/api.dj.service";

const UsersPage = () => {
    const {userSlice: {allUsers, fillUsers}} =  mainStore()

    useEffect(() => {
        userService.getAllUsers().then((data:IUser[]) => fillUsers(data))
        console.log(allUsers)
    }, []);

    return (
        <div>
            <ul>
                {allUsers.map((user: IUser) => (
                    // fillUser(user)
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