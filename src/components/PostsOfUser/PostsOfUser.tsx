import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/api.jsonplaceholder.service";
import {useParams} from "react-router-dom";
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

const PostsOfUser = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            postsService.getPostsOfUser(id).then((data:IPost[])=>setPosts(data))
        }
    }, [id]);


    return (
        <div>
            {posts.map((post:IPost) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostsOfUser;