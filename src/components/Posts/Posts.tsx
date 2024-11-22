import React from 'react';
import {IPost} from "../../models/IPost";
import {useAppSelector} from "../../store/store";

const Posts = () => {
    const {postSlice:{posts,}} = useAppSelector(state => state)

    return (
            <ul>
                {posts.map((post: IPost) => (
                    <li key={post.id}>
                        {post.id}
                        {post.title}
                    </li>
                ))}
            </ul>
    );
};

export default Posts;