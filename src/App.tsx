import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {IUser} from "./models/basicModels/IUser";
import {IPost} from "./models/basicModels/IPost";
import {userSliceActions} from "./redux/slices/userSlice";

const App = () => {
    const {userSlice:{users, user}, postSlice:{posts}} = useAppSelector(state => state)
    const dispatch =  useAppDispatch()
    useEffect(() => {
            dispatch(userSliceActions.loadUsers())
        dispatch(userSliceActions.loadUser(5))
    }, []);

    // console.log(users)
    return (
        <div>
            {users.map((user:IUser) => (
                <p>{user.name}</p>
            ))}


            {/*{JSON.stringify(user)}*/}

            {posts.map((post:IPost) => (
                <p>{post.title}</p>
            ))}
        </div>
    );
};

export default App;