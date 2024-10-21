import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Users from "./components/users/Users";
import { IUser } from "./models/IUser";
import { IPost } from "./models/IPost";
import { IApiPosts } from "./models/IApiPosts";
import { getPosts } from "./services/api.posts.service";

const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [currentUserId, setCurrentUserId] = useState<number | null>(null);

    const lift = (user: IUser) => {
        getPosts()
            .then((data: IApiPosts) => {
                const posts = data.posts;
                const filteredPosts = posts.filter((post: IPost) => post.userId === user.id);
                setPosts(filteredPosts);
                setCurrentUserId(user.id);
            });
    }

    return (
        <div className="App">
            {currentUserId !== null && <h3>User: {currentUserId}</h3>}
            {posts.length > 0 ?
            (
                posts.map(({ id, title, views }: IPost) => (
                <div className={'postOfCurUser'} key={id}>
                    <h4>---Num of Post: {id}</h4>
                    <p>Title: {title}</p>
                    <p>Number of views: {views}</p>
                </div>))
            ) : (
                  currentUserId !== null && <p>User with <strong>id: {currentUserId}</strong> hasn't posts</p>
                )


            }
            <hr />
            <Users lift={lift} />
        </div>
    );
}

export default App;
