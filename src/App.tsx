import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";


const App: FC = () => {

    const lift = (user: IUser) => {
        fetch('https://dummyjson.com/posts?limit=0')
            .then(response => response.json())
            .then(response => {

                const posts = response.posts
                const filteredPosts = posts.filter((post: any) => {
                    return post.userId === user.id
                })

                console.log(...filteredPosts)

            });
    }


    return (
        <div className="App">

            <Users lift={lift}/>
        </div>
    );
}

export default App;
