import React, {useContext} from 'react';
import Context from "../context/Context";
import {StoreType} from "../models/StoreType";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const {userSlice:{allUsers}}:StoreType = useContext(Context)

    return (
        <div>
            <ul>
                {allUsers.map((user: IUser) => (
                    <li>
                        {user.birthDate}
                    </li>
                ))}
                UsersPage
            </ul>
</div>
    );
};

export default UsersPage;