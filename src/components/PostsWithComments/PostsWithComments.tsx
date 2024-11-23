import React, {Fragment} from 'react';
import {useAppSelector} from "../../store/store";
import {IPost} from "../../models/IPost";
import Post from "../Posts/Post";
import PostComments from "./PostComments";


const PostsWithComments = () => {
    const {postSlice: {posts}, commentSlice: {comments}} = useAppSelector(state => state);

    console.log(posts);

    return (
        <ul>
            {posts.map((post: IPost) => (
                <Fragment key={post.id}>
                    <Post key={post.id} post={post}/>
                    <PostComments postId={post.id}/>
                </Fragment>
            ))}
        </ul>
    );
};

export default PostsWithComments;
