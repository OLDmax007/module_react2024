import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data) => {
                setUsers(data.users)
            });
    }, [])


    console.log(users)

    return (
        <div>
            {users.length > 0 ? JSON.stringify(users[0].id) : 'Loading...'}
        </div>
    );
};

export default Users;