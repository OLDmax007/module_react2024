import React from 'react';
import {IPost} from "../../models/IPost";

const Posts = () => {

    return (
            <ul>
                {allPosts.map((post: IPost) => (
                    <li key={post.id}>
                        {post.id}
                        {post.title}
                    </li>
                ))}
            </ul>
    );
};

export default Posts;