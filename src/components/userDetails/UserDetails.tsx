import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services/api.jsonplaceholder.service";
import {IUser} from "../../models/IUser";

const UserDetails = () => {
    const {id} = useParams();


    const [user, setUser] = useState<IUser | null>(null)


    useEffect(() => {
        if (id) {
            usersService.getUser(id).then((data: IUser) => setUser(data))
        }
    }, [id]);


    return (
        <div>
            <p>
                {user?.id} {user?.name} {user?.username}   {user?.phone} {user?.address.zipcode} {user?.website}
            </p>
        </div>
    );
};

export default UserDetails;