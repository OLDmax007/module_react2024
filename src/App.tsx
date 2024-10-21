import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IApiPosts} from "./models/IApiPosts";
import {getPosts} from "./services/api.posts.service";


const App: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    const lift = (user: IUser) => {
        getPosts()
            .then((data: IApiPosts) => {

                const posts = data.posts
                const filteredPosts = posts.filter((post: IPost) => {
                    return post.userId === user.id
                })

                setPosts(filteredPosts)

            });
    }

    console.log(posts)


    return (
        <div className="App">
            <Users lift={lift}/>
            {posts.map(({id, userId, title, views}: IPost) => (
                <div className={'postOfCurUser'} key={id}>
                    <p>{id}</p><p>{userId}</p><p>{title}</p><p>{views}</p>
                </div>
            ))}

        </div>
    );
}

export default App;
