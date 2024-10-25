import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/api.jsonplaceholder.service";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getUsers().then(data => setUsers(data))
    }, []);
    
    
    return (
        <div>
            {users.map(user => {
                <User key={user.id} user={user}/>
            })}
        </div>
    );
};

export default Users;