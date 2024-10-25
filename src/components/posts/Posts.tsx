import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {postsService} from "../../services/api.jsonplaceholder.service";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        postsService.getPosts().then((data:IPost[]) => setPosts(data))
    }, []);

    return (
        <div>
            {
                posts.map((post:IPost) => (
                    <Post key={post.id} post={post}/>
                ))
            }
        </div>
    );
};

export default Posts;