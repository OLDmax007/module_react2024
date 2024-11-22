import React, {useEffect} from 'react';
import {IPost} from "../../models/IPost";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {postSliceActions} from "../../store/slices/postSlice";
import Post from "./Post";

const Posts = () => {
    const {postSlice: {posts,}} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);


    return (
        <ul>
            {posts.map((post: IPost) => (
                <Post key={post.id} post={post}/>
            ))}
        </ul>
    );
};

export default Posts;