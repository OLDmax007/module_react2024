import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {loadUsers} from "./redux/slices/userSlice";
import {IUser} from "./models/basicModels/IUser";
import {loadPosts} from "./redux/slices/postSlice";
import {IPost} from "./models/basicModels/IPost";

const App = () => {
    const {userSlice:{users}, postSlice:{posts}} = useAppSelector(state => state)
    const dispatch =  useAppDispatch()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(loadUsers(data))
            })

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(loadPosts(data))
            })

    }, []);

    console.log(users)

    return (
        <div>
            {users.map((user:IUser) => (
                <p>{user.name}</p>
            ))}

            {posts.map((post:IPost) => (
                <p>{post.title}</p>
            ))}
        </div>
    );
};

export default App;