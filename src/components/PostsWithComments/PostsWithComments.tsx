import React from 'react';
import {useAppSelector} from "../../store/store";
import {IPost} from "../../models/IPost";
import Post from "../Posts/Post";
import PostComments from "./PostComments";


const PostsWithComments = () => {
    const {postSlice: {posts}} = useAppSelector(state => state);

    console.log(posts);

    return (
        <div>
            {posts.map((post: IPost) => (
                <React.Fragment key={post.id}>
                    <Post post={post}/>
                    <PostComments postId={post.id}/>
                </React.Fragment>
            ))}
        </div>
    );
};

export default PostsWithComments;
