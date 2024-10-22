import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type TypePosts = {
    posts: IPost[],
    currUserId: number | null
}


const Posts: FC<TypePosts> = ({posts, currUserId}) => {

    return (
        <div>
            {currUserId !== null && <h3>User: {currUserId}</h3>}
            {posts.length > 0 ? (
                posts.map((post: IPost) => (
                    <Post key={post.id} post={post} />
                ))
            ) : (
                currUserId !== null && <p>User with <strong>id: {currUserId}</strong> hasn't posts</p>
            )}
        </div>
    );
};

export default Posts;