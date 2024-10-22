import React, { FC, useState } from 'react';
import './App.css';
import Users from "./components/users/Users";
import { IUser } from "./models/IUser";
import { IPost } from "./models/IPost";
import { IApiPosts } from "./models/IApiPosts";
import { getPosts } from "./services/api.posts.service";
import Posts from "./components/posts/Posts";

const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [currUserId, setCurrUserId] = useState<number | null>(null);

    const lift = (user: IUser) => {
        getPosts(user.id)
            .then((data: IApiPosts) => {
                setPosts(data.posts);
                setCurrUserId(user.id);
            });
    }

    return (
        <div className="App">
            <Posts posts={posts} currUserId={currUserId}></Posts>
            <hr/>
            <Users lift={lift}/>
        </div>
    );
}

export default App;
