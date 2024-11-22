import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IPostProps {
    post: IPost
}


const Post:FC<IPostProps> = ({post}) => {
    return (
        <li key={post.id}>
            {post.id}
            {post.title}
        </li>
    );
};

export default Post;